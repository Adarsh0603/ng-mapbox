import { EventEmitter } from '@angular/core';
import {
  CircleStyleLayer,
  FillExtrusionStyleLayer,
  FillStyleLayer,
  HeatmapStyleLayer,
  HillshadeStyleLayer,
  LineStyleLayer,
  LngLatLike,
  MapLayerMouseEvent,
  Marker,
  MarkerOptions,
  Popup,
  PopupOptions,
  SymbolStyleLayer,
  TypedStyleLayer,
} from 'maplibre-gl';
import { PopupComponent } from '../popup/popup.component';
import { MarkerComponent } from '../marker/marker.component';

export interface NgmbMarkerOptions {
  markerOptions: {
    draggable?: MarkerOptions['draggable'];
    color?: MarkerOptions['color'];
    clickTolerance?: MarkerOptions['clickTolerance'];
    anchor?: MarkerOptions['anchor'];
    lngLat: LngLatLike;
    element?: HTMLElement;
  };
  zoomToFit: boolean;
}

export interface NgmbMapControls {
  geoLocateControl?: boolean;
  navigationControl?: boolean;
  fullScreenControl?: boolean;
  attributionControl?: boolean;
  scaleControl?: boolean;
}

export interface NgmbMarker {
  marker: Marker | undefined;
}

export interface NgmbPopup {
  popup: Popup | undefined;
}

export interface NgmbPopupOptions {
  markerComponent?: MarkerComponent | null;
  lngLat?: LngLatLike;
  options: PopupOptions;
  events?: {
    open?: EventEmitter<void>;
    close?: EventEmitter<void>;
    popupOpen?: EventEmitter<void>;
    popupClose?: EventEmitter<void>;
  };
  html?: HTMLElement;
}

export interface NgmbLayerOptions {
  id: string | null;
  type:
    | 'background'
    | 'fill'
    | 'line'
    | 'symbol'
    | 'raster'
    | 'circle'
    | 'fill-extrusion'
    | 'heatmap'
    | 'hillshade'
    | null;
  source: string | null;
  layout:
    | FillStyleLayer['layout']
    | LineStyleLayer['layout']
    | TypedStyleLayer['layout']
    | CircleStyleLayer['layout']
    | SymbolStyleLayer['layout']
    | HeatmapStyleLayer['layout']
    | FillExtrusionStyleLayer['layout']
    | HillshadeStyleLayer['layout']
    | any;
  paint: any;
  events?: {
    onLayerClick: EventEmitter<MapLayerMouseEvent>;
    onLayerHover: EventEmitter<MapLayerMouseEvent>;
  };
}

export interface NgmbSourceOptions {
  id: string | null;
  type:
    | 'geojson'
    | 'image'
    | 'raster'
    | 'raster-dem'
    | 'vector'
    | 'video'
    | null;
  data: any;
}
