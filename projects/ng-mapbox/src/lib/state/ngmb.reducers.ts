import { createReducer, on } from '@ngrx/store';
import { Marker } from 'maplibre-gl';
import * as NgmbActions from './ngmb.actions';

export interface MapState {
  mapGenerated: boolean;
  markers: Marker[];
}

export const initialState: MapState = {
  mapGenerated: false,
  markers: [],
};

export const ngmbFeatureKey = 'mapState';
export const ngmbReducer = createReducer(
  initialState,
  on(NgmbActions.mapGenerated, (state) => ({
    mapGenerated: true,
    markers: state.markers,
  })),
  on(NgmbActions.mapCleared, (state) => ({
    mapGenerated: false,
    markers: state.markers,
  })),
  on(NgmbActions.markerAdded, (state, { marker }) => ({
    ...state,
    markers: [...state.markers, marker],
  })),
  on(NgmbActions.removeAllMarkers, (state) => ({ ...state, markers: [] }))
);
