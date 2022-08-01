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
    { route: '/locate-user', text: 'Locate User' },
    { route: '/show-controls', text: 'Show Map Controls' },
  ];
}
