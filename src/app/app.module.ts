import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgMapboxModule } from 'ng-mapbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaymapComponent } from './demos/displaymap.component';
import { LoadPinsComponent } from './demos/load-pins/load-pins.component';
import { LocateUserComponent } from './demos/locate-user/locate-user.component';
import { ShowControlsComponent } from './demos/show-controls/show-controls.component';
@NgModule({
  declarations: [AppComponent, DisplaymapComponent, LoadPinsComponent, LocateUserComponent, ShowControlsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMapboxModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
