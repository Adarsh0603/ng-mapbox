import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-controls',
  template: ` <ngmb-map
    [center]="[-96, 30]"
    [zoom]="7"
    [navigationControl]="true"
    [attributionControl]="false"
    [scaleControl]="true"
    [fullscreenControl]="true"
    [style]="
      'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ'
    "
  >
  </ngmb-map>`,
  styleUrls: ['./show-controls.component.scss'],
})
export class ShowControlsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
