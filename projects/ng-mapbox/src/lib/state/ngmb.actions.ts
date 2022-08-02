import { createAction, props } from '@ngrx/store';
import { MapOptions, Marker } from 'maplibre-gl';
import { NgMapControls } from '../types/ngmb.types';

// Map Actions
export const createMap = createAction('[Map] Create Map', props<MapOptions>());
export const mapGenerated = createAction('[Map] Map Generated');
export const mapCleared = createAction('[Map] Map Cleared');

// Controls Actions

export const addControls = createAction(
  '[Control] Add Control',
  props<NgMapControls>()
);

export const markerAdded = createAction(
  '[Map] Marker Added',
  props<{ marker: Marker }>()
);

export const removeAllMarkers = createAction('[Map] RemoveMarkers');
