import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingEditComponent } from './rating-edit.component';

describe('RatingEditComponent', () => {
  let component: RatingEditComponent;
  let fixture: ComponentFixture<RatingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
