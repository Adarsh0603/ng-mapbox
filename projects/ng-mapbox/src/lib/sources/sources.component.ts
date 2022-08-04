import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { NgmbSourceOptions } from '../types/ngmb.types';

@Component({
  selector: 'ngmb-source',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css'],
})
export class SourcesComponent implements AfterViewInit {
  @Input('id') id: NgmbSourceOptions['id'] = null;
  @Input('type') type: NgmbSourceOptions['type'] = null;

  @Input('data') data: NgmbSourceOptions['data'] = null;

  options!: NgmbSourceOptions;
  sub?: Subscription;
  constructor(private mapService: MapService) {}
  ngAfterViewInit(): void {
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      this.mapService.createSource(this.options);
    });
  }
}
