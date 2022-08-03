import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPopupsComponent } from './show-popups.component';

describe('ShowPopupsComponent', () => {
  let component: ShowPopupsComponent;
  let fixture: ComponentFixture<ShowPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPopupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
