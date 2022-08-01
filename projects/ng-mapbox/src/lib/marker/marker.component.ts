import {
  AfterViewInit,
  Component,
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
  @Input('zoomonclick') zoomOnClick?: boolean = false;

  @Output('onClick')
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
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      // Create a marker after the map is generated.
      this.marker = this.mapService.createMarker(this.options);
      this.mapService.markers.push(this.marker);
      this.mapService.showAllPins();
      if (this.zoomOnClick)
        this.marker.getElement().addEventListener('click', () => {
          this.mapService.flyTo(this.marker!);
        });
    });
  }
  ngOnDestroy(): void {
    this.marker?.remove();
    this.marker = undefined;
    this.sub.unsubscribe();
  }
}
