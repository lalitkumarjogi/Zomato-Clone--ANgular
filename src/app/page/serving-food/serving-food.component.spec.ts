import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingFoodComponent } from './serving-food.component';

describe('ServingFoodComponent', () => {
  let component: ServingFoodComponent;
  let fixture: ComponentFixture<ServingFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServingFoodComponent]
    });
    fixture = TestBed.createComponent(ServingFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
