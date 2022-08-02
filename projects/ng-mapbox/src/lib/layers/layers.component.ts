import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { geoJsonData } from '../../features2';
import { MapService } from '../map/map.service';

@Component({
  selector: 'ngmb-layer',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css'],
})
export class LayersComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private mapService: MapService) {}

  sub!: Subscription;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      var map = this.mapService.map;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
