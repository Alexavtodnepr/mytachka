import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelgasComponent } from './fuelgas.component';

describe('FuelgasComponent', () => {
  let component: FuelgasComponent;
  let fixture: ComponentFixture<FuelgasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelgasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
