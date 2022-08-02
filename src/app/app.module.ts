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
import { AutoZoomComponent } from './demos/auto-zoom/auto-zoom.component';
import { appReducer } from './demos/store/demo.reducer';
import { SpecificPinComponent } from './demos/specific-pin/specific-pin.component';
import { CustomMarkerComponent } from './demos/custom-marker/custom-marker.component';
import { ChangeOnClickComponent } from './demos/change-on-click/change-on-click.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplaymapComponent,
    LoadPinsComponent,
    LocateUserComponent,
    ShowControlsComponent,
    AutoZoomComponent,
    SpecificPinComponent,
    CustomMarkerComponent,
    ChangeOnClickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMapboxModule,
    StoreModule.forRoot({ appReducer: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
