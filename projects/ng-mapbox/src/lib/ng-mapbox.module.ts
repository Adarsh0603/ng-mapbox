import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MapComponent } from './map/map.component';
import { ngmbFeatureKey, ngmbReducer } from './store/ngmb.reducers';
import { MarkerComponent } from './marker/marker.component';
import { LayersComponent } from './layers/layers.component';
import { SourcesComponent } from './sources/sources.component';
import { PopupComponent } from './popup/popup.component';
@NgModule({
  declarations: [
    MapComponent,
    MarkerComponent,
    LayersComponent,
    SourcesComponent,
    PopupComponent,
  ],
  imports: [StoreModule.forFeature(ngmbFeatureKey, ngmbReducer)],
  exports: [
    MapComponent,
    MarkerComponent,
    LayersComponent,
    SourcesComponent,
    PopupComponent,
  ],
})
export class NgMapboxModule {}
