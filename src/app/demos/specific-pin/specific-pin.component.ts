import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgmbMarker } from 'dist/ng-mapbox/lib/types/ngmb.types';
import { Marker } from 'maplibre-gl';
import { MapService } from 'ng-mapbox';
import { Observable } from 'rxjs';
import { AppState } from '../store/demo.reducer';
import { selectAllLocations } from '../store/demo.selectors';

@Component({
  selector: 'app-specific-pin',
  templateUrl: './specific-pin.component.html',
  styleUrls: ['./specific-pin.component.scss'],
})
export class SpecificPinComponent implements OnInit {
  locs$!: Observable<any>;
  location: any = null;
  selectedMarker?: NgmbMarker;
  constructor(private mapService: MapService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.locs$ = this.store.select(selectAllLocations);
  }

  printDetails(ngmbMarker: NgmbMarker, loc: any) {
    this.selectedMarker = ngmbMarker;
    this.location = {
      name: loc.name,
      address: loc.streetAddress,
    };
  }

  zoomTo() {
    this.mapService.zoomToPin(this.selectedMarker!, 14);
  }
}
