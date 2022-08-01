import { LngLatLike, MapOptions, MarkerOptions } from 'maplibre-gl';

export interface NgMarkerOptions {
  draggable?: MarkerOptions['draggable'];
  color?: MarkerOptions['color'];
  clickTolerance?: MarkerOptions['clickTolerance'];
  anchor?: MarkerOptions['anchor'];
  lngLat: LngLatLike;
}

export interface NgMapControls {
  geoLocateControl?: boolean;
  navigationControl?: boolean;
  fullScreenControl?: boolean;
  attributionControl?: boolean;
  scaleControl?: boolean;
}
