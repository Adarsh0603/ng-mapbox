import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/demo.reducer';
import { selectFewLocations } from '../store/demo.selectors';

@Component({
  selector: 'app-custom-marker',
  templateUrl: './custom-marker.component.html',
  styleUrls: ['./custom-marker.component.scss'],
})
export class CustomMarkerComponent implements OnInit {
  locs$!: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.locs$ = this.store.select(selectFewLocations);
  }
}
