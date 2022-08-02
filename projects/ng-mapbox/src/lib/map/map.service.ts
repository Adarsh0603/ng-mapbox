import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  LngLatBounds,
  Map,
  MapOptions,
  Marker,
  GeolocateControl,
  ScaleControl,
  AttributionControl,
  NavigationControl,
  FullscreenControl,
} from 'maplibre-gl';
import { map, Observable } from 'rxjs';
import * as NgmbActions from '../state/ngmb.actions';
import { selectAllLayers } from '../state/ngmb.selectors';
import {
  NgMapControls,
  NgMarkerOptions,
  NgmbMarker,
} from '../types/ngmb.types';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  mapGenerated$!: Observable<any>;
  markers: Marker[] = [];
  bounds!: LngLatBounds;

  constructor(private store: Store) {}

  generateMap(mapOptions: MapOptions, ngMapControls: NgMapControls) {
    this.map = new Map(mapOptions);
    this.bounds = new LngLatBounds();
    this.store.dispatch(NgmbActions.mapGenerated());

    this.addControls(ngMapControls);
  }

  // Add Built-in map controls
  addControls(ngMapControls: NgMapControls) {
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

  createMarker(options: NgMarkerOptions) {
    var mapOptions = options.mapOptions;

    var marker = new Marker(mapOptions)
      .setLngLat(mapOptions.lngLat)
      .addTo(this.map);

    this.markers.push(marker);

    this.bounds.extend(marker.getLngLat());

    this.showAllPins();

    return marker;
  }

  createSource(id: string, type: any, data: any) {
    this.map.on('load', () => {
      if (this.map.getSource(id)) return;
      this.map.addSource(id, {
        type: type,
        data: data,
      });
    });
  }

  createLayer(id: string, type: any, source: string, layout: any, paint: any) {
    this.map.on('load', () => {
      if (this.map.getLayer(id)) return;
      this.map.addLayer({
        id: id,
        type: type,
        source: source,
        layout: {},
        paint: paint,
      });
      this.store.dispatch(NgmbActions.layerAdded({ id: id }));
    });
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
