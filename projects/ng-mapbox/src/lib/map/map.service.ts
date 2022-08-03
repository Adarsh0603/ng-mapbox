import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  LngLatBounds,
  Map,
  MapOptions,
  Marker,
  GeolocateControl,
  Popup,
  ScaleControl,
  AttributionControl,
  NavigationControl,
  FullscreenControl,
  SourceSpecification,
} from 'maplibre-gl';
import { MarkerComponent } from '../marker/marker.component';
import { map, Observable } from 'rxjs';
import * as NgmbActions from '../state/ngmb.actions';
import { selectAllLayers } from '../state/ngmb.selectors';
import {
  NgmbMapControls,
  NgmbMarkerOptions,
  NgmbMarker,
  NgmbPopupOptions,
  NgmbSourceOptions,
  NgmbLayerOptions,
} from '../types/ngmb.types';
import { NgmbErrorHandler } from '../utils/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  mapGenerated$!: Observable<any>;
  markers: Marker[] = [];
  bounds!: LngLatBounds;

  constructor(private store: Store, private errorHandler: NgmbErrorHandler) {}

  generateMap(mapOptions: MapOptions, ngMapControls: NgmbMapControls) {
    this.map = new Map(mapOptions);
    this.bounds = new LngLatBounds();
    this.store.dispatch(NgmbActions.mapGenerated());

    this.addControls(ngMapControls);
  }

  // Add Built-in map controls
  addControls(ngMapControls: NgmbMapControls) {
    if (ngMapControls.geoLocateControl) {
      this.map.addControl(
        new GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
    }
    if (ngMapControls.fullScreenControl) {
      this.map.addControl(new FullscreenControl({}));
    }
    if (ngMapControls.navigationControl) {
      this.map.addControl(new NavigationControl({}));
    }
    if (ngMapControls.scaleControl) {
      this.map.addControl(new ScaleControl({}));
    }
    if (ngMapControls.attributionControl) {
      this.map.addControl(new AttributionControl());
    }
  }

  createMarker(options: NgmbMarkerOptions) {
    this.errorHandler.checkMarkerParams(options);

    var mapOptions = options.mapOptions;

    var marker = new Marker(mapOptions)
      .setLngLat(mapOptions.lngLat)
      .addTo(this.map);

    this.markers.push(marker);

    this.bounds.extend(marker.getLngLat());

    this.showAllPins();

    return marker;
  }

  createSource(sourceOptions: NgmbSourceOptions) {
    this.errorHandler.checkSourceParams(sourceOptions);
    const { id, type, data } = sourceOptions;
    this.map.on('load', () => {
      if (this.map.getSource(id!)) return;

      this.map.addSource(id!, {
        type: type,
        data: data,
      } as SourceSpecification);
    });
  }

  createLayer(layerOptions: NgmbLayerOptions) {
    this.errorHandler.checkLayerParams(layerOptions);
    const { id, type, layout, paint, source } = layerOptions;
    this.map.on('load', () => {
      if (this.map.getLayer(id!)) return;
      this.map.addLayer({
        id: id!,
        type: type!,
        source: source!,
        layout: layout ? layout : {},
        paint: paint,
      });
      this.store.dispatch(NgmbActions.layerAdded({ id: id! }));
    });
  }

  createPopup(popupOptions: NgmbPopupOptions) {
    this.errorHandler.checkPopupParams(popupOptions);
    var popup = new Popup(popupOptions.options).setHTML(
      popupOptions.html?.innerHTML!
    );

    if (popupOptions.markerComponent) {
      var marker = popupOptions.markerComponent.ngmbMarker?.marker;
      marker?.setPopup(popup);
    } else if (popupOptions.lngLat) {
      popup.setLngLat(popupOptions.lngLat!).addTo(this.map);
    } else {
      throw Error(
        'Either a marker component or lngLat should be supplied to a popup.'
      );
    }
    return popup;
  }

  flyTo(ngmbMarker: NgmbMarker, zoomAmount: number) {
    this.map.flyTo({
      center: ngmbMarker.marker!.getLngLat(),
      zoom: zoomAmount ? zoomAmount : this.map.getZoom() + 3,
    });
  }

  // Zoom Out to fit bounds
  showAllPins() {
    this.map.fitBounds(this.bounds, { padding: 200, duration: 1000 });
  }

  // Programmatically zoom to a pin.
  zoomToPin(ngmbMarker: NgmbMarker, zoomAmount: number) {
    this.flyTo(ngmbMarker, zoomAmount);
  }

  // Clear all map and marker data.
  removeMap() {
    this.removeMarkers();
    this.removeLayers();
    this.map.remove();
    this.store.dispatch(NgmbActions.mapCleared());
  }

  removePopup(marker: MarkerComponent) {
    if (marker) marker.ngmbMarker?.marker?.setPopup(undefined);
  }

  removeMarkers() {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  }
  removeLayers() {
    this.store.select(selectAllLayers).pipe(
      map((values) => {
        values.forEach((value) => this.map.removeLayer(value));
      })
    );
    this.store.dispatch(NgmbActions.removeAllLayers());
  }
}
