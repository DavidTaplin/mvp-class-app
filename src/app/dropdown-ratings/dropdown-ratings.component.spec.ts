import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRatingsComponent } from './dropdown-ratings.component';

describe('DropdownRatingsComponent', () => {
  let component: DropdownRatingsComponent;
  let fixture: ComponentFixture<DropdownRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
