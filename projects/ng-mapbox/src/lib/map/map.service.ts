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
import { Observable } from 'rxjs';
import * as NgmbActions from '../state/ngmb.actions';
import { NgMapControls, NgMarkerOptions } from '../types/ngmb.types';

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
    var marker = new Marker(options).setLngLat(options.lngLat).addTo(this.map);
    this.bounds.extend(marker.getLngLat());
    return marker;
  }

  flyTo(marker: Marker) {
    this.map.flyTo({
      center: marker.getLngLat(),
      zoom: this.map.getZoom() + 3,
    });
  }

  showAllPins() {
    this.map.fitBounds(this.bounds, { padding: 200, duration: 1000 });
  }

  removeMap() {
    this.removeMarkers();
    this.store.dispatch(NgmbActions.mapCleared());

    this.map.remove();
  }
  removeMarkers() {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  }
}
