import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/demo.reducer';
import { selectGeoJson } from '../store/demo.selectors';

@Component({
  selector: 'app-create-layer',
  templateUrl: './create-layer.component.html',
  styleUrls: ['./create-layer.component.scss'],
})
export class CreateLayerComponent implements OnInit {
  geoJson$!: Observable<any>;
  layerType: any = 'fill';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.geoJson$ = this.store.select(selectGeoJson);
  }
}
