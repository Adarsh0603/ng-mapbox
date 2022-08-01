import { createAction, props } from '@ngrx/store';
import { Marker } from 'maplibre-gl';

export const mapGenerated = createAction('[Map] Map Generated');
export const mapCleared = createAction('[Map] Map Cleared');
export const markerAdded = createAction(
  '[Map] Marker Added',
  props<{ marker: Marker }>()
);

export const removeAllMarkers = createAction('[Map] RemoveMarkers');
