import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapService } from 'ng-mapbox';
import { Observable } from 'rxjs';
import { selectAllLocations } from '../store/demo.selectors';

@Component({
  selector: 'app-auto-zoom',
  templateUrl: './auto-zoom.component.html',
  styleUrls: ['./auto-zoom.component.scss'],
})
export class AutoZoomComponent implements OnInit {
  locs$: Observable<any>;

  constructor(
    private mapService: MapService,
    private store: Store<{ locations: any[] }>
  ) {
    this.locs$ = this.store.select(selectAllLocations);
  }

  ngOnInit(): void {}
  showAllPins() {
    this.mapService.showAllPins();
  }
}
