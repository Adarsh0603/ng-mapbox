import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMarkerComponent } from './custom-marker.component';

describe('CustomMarkerComponent', () => {
  let component: CustomMarkerComponent;
  let fixture: ComponentFixture<CustomMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
