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
import { geoJsonData } from '../../features2';
import * as NgmbActions from '../state/ngmb.actions';
import { selectMap } from '../state/ngmb.selectors';
import {
  NgMapControls,
  NgMarkerOptions,
  NgmbMarker,
} from '../types/ngmb.types';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map$!: Observable<Map | undefined>;
  mapGenerated$!: Observable<any>;
  markers: Marker[] = [];
  bounds!: LngLatBounds;

  constructor(private store: Store) {}

  generateMap(mapOptions: MapOptions, ngMapControls: NgMapControls) {
    this.store.dispatch(NgmbActions.createMap(mapOptions));
    this.map$ = this.store.select(selectMap);
    this.bounds = new LngLatBounds();
    this.store.dispatch(NgmbActions.mapGenerated());

    // this.map.on('load', () => {
    //   this.map.addSource('polygons', {
    //     type: 'geojson',
    //     data: geoJsonData,
    //   });
    //   this.map.addLayer({
    //     id: 'Polygon-fills',
    //     type: 'fill',
    //     source: 'polygons',
    //     layout: {},
    //     paint: {
    //       'fill-color': '#ECB390',
    //       'fill-opacity': 0.8,
    //     },
    //   });
    //   this.map.addLayer({
    //     id: 'Polygon-borders',
    //     type: 'line',
    //     source: 'polygons',
    //     layout: {},
    //     paint: {
    //       'line-color': 'blue',
    //       'line-width': 2,
    //     },
    //   });
    // });
    this.addControls(ngMapControls);
  }

  // Add Built-in map controls
  addControls(ngMapControls: NgMapControls) {
    this.store.dispatch(NgmbActions.addControls(ngMapControls));
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
    this.store.dispatch(NgmbActions.mapCleared());

    this.map.remove();
  }
  removeMarkers() {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  }
}
