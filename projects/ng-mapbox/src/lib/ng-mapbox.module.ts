import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MapComponent } from './map/map.component';
import { ngmbFeatureKey, ngmbReducer } from './state/ngmb.reducers';
import { MarkerComponent } from './marker/marker.component';

import { DraggableDirective } from './directives/draggable.directive';
@NgModule({
  declarations: [MapComponent, MarkerComponent, DraggableDirective],
  imports: [StoreModule.forFeature(ngmbFeatureKey, ngmbReducer)],
  exports: [MapComponent, MarkerComponent],
})
export class NgMapboxModule {}
