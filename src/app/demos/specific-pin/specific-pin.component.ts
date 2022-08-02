import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coordinates, MapService } from 'ng-mapbox';
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

  constructor(private mapService: MapService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.locs$ = this.store.select(selectAllLocations);
  }

  printDetails(loc: any) {
    this.location = {
      name: loc.name,
      address: loc.streetAddress,
      coordinates: {
        lng: loc?.geocode?.Longitude,
        lat: loc?.geocode?.Latitude,
      },
    };
  }

  zoomTo() {
    console.log(this.location.coordinates);
    this.mapService.zoomToPin(this.location.coordinates as Coordinates, 14);
  }
}
