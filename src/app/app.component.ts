import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  routes: any[] = [
    { route: '', text: 'Display Map' },
    { route: '/loadpins', text: 'Load Pins' },
    { route: '/specific-pin', text: 'Zoom To Specific Pin' },

    { route: '/auto-zoom', text: 'Auto Zoom' },
    { route: '/custom-marker', text: 'Custom Marker' },
    { route: '/change-on-click', text: 'Change/Replace Pin on Click' },
    { route: '/create-layer', text: 'Create Layer' },
    { route: '/layer-interaction', text: 'Layer Interactions' },

    { route: '/show-popup', text: 'Show Popups' },

    { route: '/locate-user', text: 'Locate User' },
    { route: '/show-controls', text: 'Show Map Controls' },
  ];
}
