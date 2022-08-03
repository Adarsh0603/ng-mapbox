import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/demo.reducer';
import { selectFewLocations } from '../store/demo.selectors';

@Component({
  selector: 'app-load-pins',
  templateUrl: './load-pins.component.html',
  styleUrls: ['./load-pins.component.scss'],
})
export class LoadPinsComponent implements OnInit {
  locs$!: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.locs$ = this.store.select(selectFewLocations);
  }
}
