import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOnClickComponent } from './change-on-click.component';

describe('ChangeOnClickComponent', () => {
  let component: ChangeOnClickComponent;
  let fixture: ComponentFixture<ChangeOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOnClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
