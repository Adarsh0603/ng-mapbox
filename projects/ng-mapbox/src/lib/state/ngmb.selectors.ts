import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapState, ngmbFeatureKey } from './ngmb.reducers';

export const selectMap = createSelector(
  createFeatureSelector(ngmbFeatureKey),
  (state: MapState) => state.map
);

export const selectMapGenerated = createSelector(
  createFeatureSelector(ngmbFeatureKey),
  (state: MapState) => state.mapGenerated
);
