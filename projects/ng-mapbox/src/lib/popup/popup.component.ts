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
import { LngLatLike, PointLike, Popup, PopupOptions } from 'maplibre-gl';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { MarkerComponent } from '../marker/marker.component';
import { NgmbPopupOptions } from '../types/ngmb.types';

@Component({
  selector: 'ngmb-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() closeButton?: PopupOptions['closeButton'];
  @Input() closeOnClick?: PopupOptions['closeOnClick'];
  @Input() closeOnMove?: PopupOptions['closeOnMove'];
  @Input() focusAfterOpen?: PopupOptions['focusAfterOpen'];
  @Input() anchor?: PopupOptions['anchor'];
  @Input() className?: PopupOptions['className'];
  @Input() maxWidth?: PopupOptions['maxWidth'];
  @Input() lngLat?: LngLatLike;
  @Input() marker?: MarkerComponent;
  @Input() offset?: number | PointLike | { [anchor: string]: [number, number] };

  @Output() popupClose = new EventEmitter<void>();
  @Output() popupOpen = new EventEmitter<void>();

  @ViewChild('popupHtml', { static: true }) popupHtml!: ElementRef;

  popup?: Popup;
  popupOptions?: NgmbPopupOptions;
  sub?: Subscription;
  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.popupOptions = {
      html: this.popupHtml.nativeElement,
      markerComponent: this.marker,
      options: {
        closeButton: this.closeButton,
        closeOnClick: this.closeOnClick,
        closeOnMove: this.closeOnMove,
        focusAfterOpen: this.focusAfterOpen,
        anchor: this.anchor,
        className: this.className,
        maxWidth: this.maxWidth,
      },
      events: {
        popupOpen: this.popupOpen,
        popupClose: this.popupClose,
      },
    };
  }
  ngAfterViewInit(): void {
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;

      this.popup = this.mapService.createPopup(this.popupOptions!);
    });
  }
  ngOnDestroy(): void {
    if (this.marker) this.mapService.removePopup(this.marker!);
    this.popup = undefined;
    this.sub?.unsubscribe();
  }
}
