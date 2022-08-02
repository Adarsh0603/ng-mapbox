import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoZoomComponent } from './demos/auto-zoom/auto-zoom.component';
import { ChangeOnClickComponent } from './demos/change-on-click/change-on-click.component';
import { CreateLayerComponent } from './demos/create-layer/create-layer.component';
import { CustomMarkerComponent } from './demos/custom-marker/custom-marker.component';
import { DisplaymapComponent } from './demos/displaymap.component';
import { LoadPinsComponent } from './demos/load-pins/load-pins.component';
import { LocateUserComponent } from './demos/locate-user/locate-user.component';
import { ShowControlsComponent } from './demos/show-controls/show-controls.component';
import { SpecificPinComponent } from './demos/specific-pin/specific-pin.component';

const routes: Routes = [
  { path: '', component: DisplaymapComponent, pathMatch: 'full' },
  { path: 'loadpins', component: LoadPinsComponent, pathMatch: 'full' },
  { path: 'locate-user', component: LocateUserComponent, pathMatch: 'full' },
  {
    path: 'show-controls',
    component: ShowControlsComponent,
    pathMatch: 'full',
  },
  { path: 'auto-zoom', component: AutoZoomComponent, pathMatch: 'full' },
  { path: 'specific-pin', component: SpecificPinComponent },
  { path: 'custom-marker', component: CustomMarkerComponent },
  { path: 'change-on-click', component: ChangeOnClickComponent },
  { path: 'create-layer', component: CreateLayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
