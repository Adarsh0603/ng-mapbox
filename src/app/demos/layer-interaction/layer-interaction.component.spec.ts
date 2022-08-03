import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerInteractionComponent } from './layer-interaction.component';

describe('LayerInteractionComponent', () => {
  let component: LayerInteractionComponent;
  let fixture: ComponentFixture<LayerInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
