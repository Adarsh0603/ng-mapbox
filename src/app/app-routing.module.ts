import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoZoomComponent } from './demos/auto-zoom/auto-zoom.component';
import { ChangeOnClickComponent } from './demos/change-on-click/change-on-click.component';
import { CreateLayerComponent } from './demos/create-layer/create-layer.component';
import { CustomMarkerComponent } from './demos/custom-marker/custom-marker.component';
import { LayerInteractionComponent } from './demos/layer-interaction/layer-interaction.component';
import { LoadPinsComponent } from './demos/load-pins/load-pins.component';
import { LocateUserComponent } from './demos/locate-user/locate-user.component';
import { ShowControlsComponent } from './demos/show-controls/show-controls.component';
import { ShowPopupsComponent } from './demos/show-popups/show-popups.component';
import { SimpleMapComponent } from './demos/simple-map/simple-map.component';
import { SpecificPinComponent } from './demos/specific-pin/specific-pin.component';

const routes: Routes = [
  { path: '', component: SimpleMapComponent },
  { path: 'loadpins', component: LoadPinsComponent },
  { path: 'locate-user', component: LocateUserComponent },
  {
    path: 'show-controls',
    component: ShowControlsComponent,
  },
  { path: 'auto-zoom', component: AutoZoomComponent },
  { path: 'specific-pin', component: SpecificPinComponent },
  { path: 'custom-marker', component: CustomMarkerComponent },
  { path: 'change-on-click', component: ChangeOnClickComponent },
  { path: 'create-layer', component: CreateLayerComponent },
  { path: 'layer-interaction', component: LayerInteractionComponent },
  { path: 'show-popup', component: ShowPopupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
