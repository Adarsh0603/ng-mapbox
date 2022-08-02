import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './demo.reducer';

export const selectAllLocations = createSelector(
  createFeatureSelector('appReducer'),
  (state: AppState) => state.locations
);

export const selectFewLocations = createSelector(
  createFeatureSelector('appReducer'),
  (state: AppState) => state.locations.slice(0, 5)
);

export const selectGeoJson = createSelector(
  createFeatureSelector('appReducer'),
  (state: AppState) => state.geoJson
);
