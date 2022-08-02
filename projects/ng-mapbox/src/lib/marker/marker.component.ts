import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { LngLatLike, Marker, MarkerOptions } from 'maplibre-gl';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { NgMarkerOptions, NgmbMarker } from '../types/ngmb.types';

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

  @ViewChild('customMarker', { static: true })
  customMarkerEl: ElementRef | null = null;

  @Output() onClick = new EventEmitter<NgmbMarker>();

  ngmbMarker?: NgmbMarker;

  options!: NgMarkerOptions;
  sub!: Subscription;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.options = {
      mapOptions: {
        draggable: this.draggable,
        color: this.color,
        anchor: this.anchor,
        clickTolerance: this.clickTolerance,
        lngLat: this.lngLat,
      },
    };
    if (this.customMarkerEl?.nativeElement.innerHTML != '') {
      this.options.mapOptions.element = this.customMarkerEl?.nativeElement;
    }
  }

  ngAfterViewInit(): void {
    // Create a marker after the map is generated.
    this.ngmbMarker = {
      marker: undefined,
    };
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      this.ngmbMarker!.marker = this.mapService.createMarker(this.options);

      this.ngmbMarker!.marker.getElement().addEventListener('click', () => {
        this.onClick.emit(this.ngmbMarker);
        if (this.zoomOnClick)
          this.mapService.flyTo(this.ngmbMarker!, this.zoomAmount!!);
      });
    });
  }
  ngOnDestroy(): void {
    this.ngmbMarker!.marker?.remove();
    this.ngmbMarker!.marker = undefined;
    this.sub.unsubscribe();
  }
}
