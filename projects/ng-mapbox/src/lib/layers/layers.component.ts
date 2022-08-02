import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  CirclePaintProps,
  CircleStyleLayer,
  FillExtrusionPaintProps,
  FillExtrusionStyleLayer,
  FillPaintProps,
  FillStyleLayer,
  HeatmapPaintProps,
  HeatmapStyleLayer,
  HillshadePaintProps,
  HillshadeStyleLayer,
  LinePaintProps,
  LineStyleLayer,
  SymbolPaintProps,
  SymbolStyleLayer,
  TypedStyleLayer,
} from 'maplibre-gl';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { LayerType } from '../types/ngmb.types';

@Component({
  selector: 'ngmb-layer',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css'],
})
export class LayersComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private mapService: MapService) {}

  @Input('id') id: string = '';
  @Input('type') type?: LayerType;

  @Input('source') source: string = '';
  @Input('layout') layout?:
    | FillStyleLayer['layout']
    | LineStyleLayer['layout']
    | TypedStyleLayer['layout']
    | CircleStyleLayer['layout']
    | SymbolStyleLayer['layout']
    | HeatmapStyleLayer['layout']
    | FillExtrusionStyleLayer['layout']
    | HillshadeStyleLayer['layout'];
  @Input('paint') paint?: any;

  sub!: Subscription;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      this.mapService.createLayer(
        this.id,
        this.type,
        this.source,
        this.layout,
        this.paint
      );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
