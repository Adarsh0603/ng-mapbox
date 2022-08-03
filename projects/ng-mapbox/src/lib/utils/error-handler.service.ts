import { Injectable } from '@angular/core';
import { NgmbMarkerOptions } from '../types/ngmb.types';
import {
  NgmbLayerOptions,
  NgmbPopupOptions,
  NgmbSourceOptions,
} from '../types/ngmb.types';

@Injectable({
  providedIn: 'root',
})
export class NgmbErrorHandler {
  constructor() {}

  checkLayerParams(layerOptions: NgmbLayerOptions) {
    if (
      !layerOptions.id ||
      !layerOptions.type ||
      !layerOptions.source ||
      !layerOptions.paint
    ) {
      throw new Error(
        'A Proper type,id,source and paint should be passed with a layer.'
      );
    }
  }

  checkMarkerParams(options: NgmbMarkerOptions) {
    if (!options.mapOptions.lngLat) {
      throw new Error('lngLat should be supplied with a marker');
    }
  }

  checkPopupParams(popupOptions: NgmbPopupOptions) {
    if (!popupOptions.markerComponent && !popupOptions.lngLat) {
      throw new Error(
        'A marker component or lngLat should be supplied with a popup.'
      );
    }
  }

  checkSourceParams(sourceOptions: NgmbSourceOptions) {
    if (!sourceOptions.id || !sourceOptions.type || !sourceOptions.data) {
      throw new Error('A type,data and id should be supplied with a source.');
    }
  }
}
