import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapService } from '../map/map.service';
import { SourceType } from '../types/ngmb.types';

@Component({
  selector: 'ngmb-source',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css'],
})
export class SourcesComponent implements OnInit, AfterViewInit {
  @Input('id') id: string = '';
  @Input('type') type?: any;

  @Input('data') data?: any;

  sub?: Subscription;
  constructor(private mapService: MapService) {}
  ngAfterViewInit(): void {
    this.sub = this.mapService.mapGenerated$.subscribe((res) => {
      if (!res) return;
      this.mapService.createSource(this.id, this.type, this.data);
    });
  }

  ngOnInit(): void {}
}
