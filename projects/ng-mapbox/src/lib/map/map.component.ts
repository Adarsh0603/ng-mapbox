import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MapOptions } from 'maplibre-gl';
import { selectMapGenerated } from '../state/ngmb.selectors';
import { NgmbMapControls } from '../types/ngmb.types';
import { MapService } from './map.service';

@Component({
  selector: 'ngmb-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('map') mapContainer!: ElementRef;

  @Input('style') style!: MapOptions['style'];
  @Input('center') center?: MapOptions['center'];
  @Input('zoom') zoom?: MapOptions['zoom'];
  @Input('geolocateControl') geolocateControl: boolean = false;
  @Input('navigationControl') navigationControl: boolean = false;
  @Input('fullscreenControl') fullscreenControl: boolean = false;
  @Input('attributionControl') attributionControl: boolean = false;
  @Input('scaleControl') scaleControl: boolean = false;

  mapOptions!: MapOptions;
  ngMapControls!: NgmbMapControls;
  generated: boolean = false;

  constructor(private mapService: MapService, private store: Store) {}

  ngOnInit(): void {
    this.mapService.mapGenerated$ = this.store.select(selectMapGenerated);
  }

  ngAfterViewInit(): void {
    this.mapOptions = {
      container: this.mapContainer.nativeElement,
      style: this.style,
      center: this.center,
      zoom: this.zoom,
    };
    this.ngMapControls = {
      geoLocateControl: this.geolocateControl,
      fullScreenControl: this.fullscreenControl,
      navigationControl: this.navigationControl,
      attributionControl: this.attributionControl,
      scaleControl: this.scaleControl,
    };

    this.mapService.generateMap(this.mapOptions, this.ngMapControls);
  }

  ngOnDestroy(): void {
    this.mapService.removeMap();
  }
}
