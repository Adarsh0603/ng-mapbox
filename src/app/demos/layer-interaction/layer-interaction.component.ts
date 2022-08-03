import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/demo.reducer';
import { selectGeoJson } from '../store/demo.selectors';

@Component({
  selector: 'app-layer-interaction',
  templateUrl: './layer-interaction.component.html',
  styleUrls: ['./layer-interaction.component.scss'],
})
export class LayerInteractionComponent implements OnInit {
  geoJson$!: Observable<any>;
  selectedLayerPoint: any;
  selectedLayerLocation: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.geoJson$ = this.store.select(selectGeoJson);
  }
  onLayerHover(event: any) {
    this.selectedLayerLocation = event.features[0].properties['NAME'];
  }
  onLayerClick(event: any) {
    this.selectedLayerPoint = event.lngLat;
  }
}
