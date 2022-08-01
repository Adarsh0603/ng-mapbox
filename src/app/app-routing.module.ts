import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaymapComponent } from './demos/displaymap.component';
import { LoadPinsComponent } from './demos/load-pins/load-pins.component';
import { LocateUserComponent } from './demos/locate-user/locate-user.component';
import { ShowControlsComponent } from './demos/show-controls/show-controls.component';

const routes: Routes = [
  { path: '', component: DisplaymapComponent },
  { path: 'loadpins', component: LoadPinsComponent, pathMatch: 'full' },
  { path: 'locate-user', component: LocateUserComponent, pathMatch: 'full' },
  {
    path: 'show-controls',
    component: ShowControlsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
