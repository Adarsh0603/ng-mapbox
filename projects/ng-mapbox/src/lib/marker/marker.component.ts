import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { LngLatLike, Marker, MarkerOptions } from 'maplibre-gl';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { NgMarkerOptions } from '../types/ngmb.types';

@Component({
  selector: 'ngmb-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css'],
})
export class MarkerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('draggable') draggable?: MarkerOptions['draggable'];
  @Input('color') color?: MarkerOptions['color'];
  @Input('anchor') anchor?: MarkerOptions['anchor'];
  @Input('clickTolerance') clickTolerance?: MarkerOptions['clickTolerance'];
  @Input('lngLat') lngLat!: LngLatLike;
  @Input('zoomOnClick') zoomOnClick?: boolean = false;
  @Input('zoomAmount') zoomAmount?: number;

  @Output() onClick = new EventEmitter();

  marker?: Marker;

  options!: NgMarkerOptions;
  sub!: Subscription;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.options = {
      draggable: this.draggable,
      color: this.color,
      anchor: this.anchor,
      clickTolerance: this.clickTolerance,
      lngLat: this.lngLat,
    };
  }

  ngAfterViewInit(): void {
    // Create a marker after the map is generated.
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      this.marker = this.mapService.createMarker(this.options);

      if (this.zoomOnClick)
        this.marker.getElement().addEventListener('click', () => {
          this.onClick.emit();
          this.mapService.flyTo(this.marker!, this.zoomAmount!!);
        });
    });
  }
  ngOnDestroy(): void {
    this.marker?.remove();
    this.marker = undefined;
    this.sub.unsubscribe();
  }
}
