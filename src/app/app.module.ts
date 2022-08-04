import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgMapboxModule } from 'ng-mapbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadPinsComponent } from './demos/load-pins/load-pins.component';
import { LocateUserComponent } from './demos/locate-user/locate-user.component';
import { ShowControlsComponent } from './demos/show-controls/show-controls.component';
import { AutoZoomComponent } from './demos/auto-zoom/auto-zoom.component';
import { appReducer } from './demos/store/demo.reducer';
import { SpecificPinComponent } from './demos/specific-pin/specific-pin.component';
import { CustomMarkerComponent } from './demos/custom-marker/custom-marker.component';
import { ChangeOnClickComponent } from './demos/change-on-click/change-on-click.component';
import { CreateLayerComponent } from './demos/create-layer/create-layer.component';
import { ShowPopupsComponent } from './demos/show-popups/show-popups.component';
import { LayerInteractionComponent } from './demos/layer-interaction/layer-interaction.component';
import { SimpleMapComponent } from './demos/simple-map/simple-map.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadPinsComponent,
    LocateUserComponent,
    ShowControlsComponent,
    AutoZoomComponent,
    SpecificPinComponent,
    CustomMarkerComponent,
    ChangeOnClickComponent,
    CreateLayerComponent,
    ShowPopupsComponent,
    LayerInteractionComponent,
    SimpleMapComponent,
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
