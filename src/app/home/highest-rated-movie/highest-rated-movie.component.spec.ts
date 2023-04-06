import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRatedMovieComponent } from './highest-rated-movie.component';

describe('HighestRatedMovieComponent', () => {
  let component: HighestRatedMovieComponent;
  let fixture: ComponentFixture<HighestRatedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestRatedMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestRatedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
