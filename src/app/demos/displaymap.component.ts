import { Component, OnInit } from '@angular/core';
import { LngLatLike } from 'maplibre-gl';
import { MapService } from 'projects/ng-mapbox/src/public-api';
import { data } from './features3';

@Component({
  selector: 'app-displaymap',
  templateUrl: './displaymap.component.html',
  styleUrls: ['./displaymap.component.scss'],
})
export class DisplaymapComponent implements OnInit {
  constructor(private mapService: MapService) {}
  locs: any[] = [];
  ngOnInit(): void {
    this.locs = data.records;
  }
}
