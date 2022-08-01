import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPinsComponent } from './load-pins.component';

describe('LoadPinsComponent', () => {
  let component: LoadPinsComponent;
  let fixture: ComponentFixture<LoadPinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
