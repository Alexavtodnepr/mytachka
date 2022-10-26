import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalviewsComponent } from './technicalviews.component';

describe('TechnicalviewsComponent', () => {
  let component: TechnicalviewsComponent;
  let fixture: ComponentFixture<TechnicalviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
