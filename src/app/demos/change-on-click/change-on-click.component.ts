import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgmbMarker } from 'dist/ng-mapbox/lib/types/ngmb.types';
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
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.locs$ = this.store.select(selectFewLocations);
  }

  changeMarkerStyle(marker: NgmbMarker) {
    console.log(
      (marker.marker?.getElement().childNodes[0] as HTMLElement).classList.add(
        'new-style'
      )
    );
  }
}
