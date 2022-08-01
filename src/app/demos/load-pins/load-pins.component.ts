import { Component, OnInit } from '@angular/core';
import { MapService } from 'ng-mapbox';
import { data } from '../features3';

@Component({
  selector: 'app-load-pins',
  templateUrl: './load-pins.component.html',
  styleUrls: ['./load-pins.component.scss'],
})
export class LoadPinsComponent implements OnInit {
  constructor(private mapService: MapService) {}
  locs: any[] = [];
  ngOnInit(): void {
    this.locs = data.records;
  }
}
