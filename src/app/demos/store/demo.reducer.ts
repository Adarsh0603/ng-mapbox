import { createReducer, on } from '@ngrx/store';
import { data } from '../features3';
import { geoJsonData } from '../features2';

export interface AppState {
  locations: any[];
  geoJson: any;
}

export const initialState: AppState = {
  locations: data.records,
  geoJson: geoJsonData,
};

export const appReducer = createReducer(initialState);
