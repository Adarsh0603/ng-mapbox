import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapService, NgmbMarker } from 'ng-mapbox';
import { Observable } from 'rxjs';
import { AppState } from '../store/demo.reducer';
import { selectFewLocations } from '../store/demo.selectors';

@Component({
  selector: 'app-change-on-click',
  templateUrl: './change-on-click.component.html',
  styleUrls: ['./change-on-click.component.scss'],
})
export class ChangeOnClickComponent implements OnInit {
  locs$!: Observable<any>;
  selected: boolean = false;
  constructor(private store: Store<AppState>, private mapService: MapService) {}

  ngOnInit(): void {
    this.locs$ = this.store.select(selectFewLocations);
  }

  changeMarker(marker: NgmbMarker, newMarker: HTMLElement) {
    this.mapService.changeMarkerElement(marker, newMarker.innerHTML);
  }
}
