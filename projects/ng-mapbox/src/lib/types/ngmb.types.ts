import { LngLatLike, Marker, MarkerOptions } from 'maplibre-gl';

export interface NgMarkerOptions {
  mapOptions: {
    draggable?: MarkerOptions['draggable'];
    color?: MarkerOptions['color'];
    clickTolerance?: MarkerOptions['clickTolerance'];
    anchor?: MarkerOptions['anchor'];
    lngLat: LngLatLike;
    element?: HTMLElement;
  };
}

export interface NgMapControls {
  geoLocateControl?: boolean;
  navigationControl?: boolean;
  fullScreenControl?: boolean;
  attributionControl?: boolean;
  scaleControl?: boolean;
}

export interface NgmbMarker {
  marker: Marker | undefined;
}
