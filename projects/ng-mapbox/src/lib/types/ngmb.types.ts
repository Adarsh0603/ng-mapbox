import {
  HeatmapStyleLayer,
  LayerFeatureStates,
  LngLatLike,
  Marker,
  MarkerOptions,
} from 'maplibre-gl';

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

export enum LayerType {
  LINE = '"line"',
  FILL = '"fill"',
  TYPED = '"typed"',
  CIRCLE = '"circle"',
  SYMBOL = '"symbol"',
  HEATMAP = '"heatmap"',
  CUSTOM = '"custom"',
  FILL_EXTRUSION = '"fill-extrusion"',
  HILLSHADE = '"hillshade"',
  RASTER = '"raster"',
}

export enum SourceType {
  GEOJSON = '"geojson"',
  IMAGE = '"image"',
  RASTER = '"raster"',
  RASTER_DEM = '"raster-dem"',
  VECTOR = '"vector"',
  VIDEO = '"video"',
}

// export interface NgmbLayer{
//   layer:
// }
