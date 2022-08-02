import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MapComponent } from './map/map.component';
import { ngmbFeatureKey, ngmbReducer } from './state/ngmb.reducers';
import { MarkerComponent } from './marker/marker.component';
import { DraggableDirective } from './directives/draggable.directive';
import { LayersComponent } from './layers/layers.component';
import { SourcesComponent } from './sources/sources.component';
@NgModule({
  declarations: [
    MapComponent,
    MarkerComponent,
    DraggableDirective,
    LayersComponent,
    SourcesComponent,
  ],
  imports: [StoreModule.forFeature(ngmbFeatureKey, ngmbReducer)],
  exports: [MapComponent, MarkerComponent, LayersComponent, SourcesComponent],
})
export class NgMapboxModule {}
