import { createReducer, on } from '@ngrx/store';
import { data } from '../features3';
import * as DemoActions from './demo.actions';

export interface AppState {
  locations: any[];
}

export const initialState: AppState = {
  locations: data.records,
};

export const appReducer = createReducer(initialState);
