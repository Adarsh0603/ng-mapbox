import { createReducer, on } from '@ngrx/store';
import {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  Map,
  Marker,
  NavigationControl,
  ScaleControl,
} from 'maplibre-gl';
import { map } from 'rxjs';
import * as NgmbActions from './ngmb.actions';

export interface MapState {
  mapGenerated?: boolean;
  map?: Map | undefined;
  markers?: Marker[];
}

export const initialState: MapState = {
  mapGenerated: false,
  markers: [],
  map: undefined,
};

export const ngmbFeatureKey = 'mapState';
export const ngmbReducer = createReducer(
  initialState,
  on(NgmbActions.createMap, (state, mapOptions) => ({
    map: new Map(mapOptions),
  })),
  on(NgmbActions.mapGenerated, (state) => ({
    mapGenerated: true,
    markers: state.markers,
  })),
  on(NgmbActions.mapCleared, (state) => ({
    mapGenerated: false,
    markers: state.markers,
  })),
  on(NgmbActions.addControls, (state, ngMapControls) => {
    var map = state.map!;
    if (ngMapControls.geoLocateControl) {
      map.addControl(
        new GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
    }
    if (ngMapControls.fullScreenControl) {
      map.addControl(new FullscreenControl({}));
    }
    if (ngMapControls.navigationControl) {
      map.addControl(new NavigationControl({}));
    }
    if (ngMapControls.scaleControl) {
      map.addControl(new ScaleControl({}));
    }
    if (ngMapControls.attributionControl) {
      map.addControl(new AttributionControl());
    }
    return { map: map };
  }),
  on(NgmbActions.markerAdded, (state, { marker }) => ({
    ...state,
    markers: [...state.markers!, marker],
  })),
  on(NgmbActions.removeAllMarkers, (state) => ({ ...state, markers: [] }))
);
