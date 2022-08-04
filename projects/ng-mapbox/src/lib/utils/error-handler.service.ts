import { Injectable } from '@angular/core';
import { MapOptions } from 'maplibre-gl';
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

  checkMapParams(mapOptions: MapOptions) {
    if (!mapOptions.style)
      throw new Error('A map style should be passed along with the map.');
  }
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
    if (!options.markerOptions.lngLat) {
      throw new Error('lngLat should be supplied with a marker');
    }
  }

  checkPopupParams(popupOptions: NgmbPopupOptions) {
    if (!popupOptions.markerComponent && !popupOptions.lngLat) {
      throw new Error(
        'A marker component or lngLat should be supplied with a popup.'
      );
    }
    if (popupOptions.markerComponent && popupOptions.lngLat) {
      throw new Error(
        'Both marker component and lngLat cannot be supplied together with a popup.'
      );
    }
  }

  checkSourceParams(sourceOptions: NgmbSourceOptions) {
    if (!sourceOptions.id || !sourceOptions.type || !sourceOptions.data) {
      throw new Error('A type,data and id should be supplied with a source.');
    }
  }
}
