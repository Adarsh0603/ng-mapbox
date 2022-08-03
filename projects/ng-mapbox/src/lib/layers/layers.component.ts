import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import {
  CircleStyleLayer,
  FillExtrusionStyleLayer,
  FillStyleLayer,
  HeatmapStyleLayer,
  HillshadeStyleLayer,
  LineStyleLayer,
  SymbolStyleLayer,
  TypedStyleLayer,
} from 'maplibre-gl';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { NgmbLayerOptions } from '../types/ngmb.types';

@Component({
  selector: 'ngmb-layer',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css'],
})
export class LayersComponent implements AfterViewInit, OnDestroy {
  constructor(private mapService: MapService) {}

  @Input('id') id: NgmbLayerOptions['id'] = null;
  @Input('type') type: NgmbLayerOptions['type'] = null;

  @Input('source') source: NgmbLayerOptions['source'] = null;
  @Input('layout') layout: NgmbLayerOptions['layout'] = null;
  @Input('paint') paint?: NgmbLayerOptions['paint'];

  sub!: Subscription;

  ngAfterViewInit(): void {
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      console.log(this.id, this.type, this.source, this.layout, this.paint);
      this.mapService.createLayer({
        id: this.id,
        type: this.type,
        source: this.source,
        layout: this.layout,
        paint: this.paint,
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
