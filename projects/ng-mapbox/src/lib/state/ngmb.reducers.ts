import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Marker } from 'maplibre-gl';
import * as NgmbActions from './ngmb.actions';

export interface MapState {
  mapGenerated: boolean;
  markers: Marker[];
  layerIds: string[];
}

export const initialState: MapState = {
  mapGenerated: false,
  markers: [],
  layerIds: [],
};

export const ngmbFeatureKey = 'mapState';
export const ngmbReducer = createReducer(
  initialState,
  on(NgmbActions.mapGenerated, (state) => ({
    ...state,
    mapGenerated: true,
  })),
  on(NgmbActions.mapCleared, (state) => ({
    ...state,
    mapGenerated: false,
  })),
  on(NgmbActions.markerAdded, (state, { marker }) => ({
    ...state,
    markers: [...state.markers, marker],
  })),
  on(NgmbActions.layerAdded, (state, { id }) => ({
    ...state,
    layerIds: [...state.layerIds, id],
  })),
  on(NgmbActions.removeAllLayers, (state) => ({
    ...state,
    layerIds: [],
  })),
  on(NgmbActions.removeAllMarkers, (state) => ({ ...state, markers: [] }))
);
