import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPlaylistComponent } from './featured-playlist.component';

describe('FeaturedPlaylistComponent', () => {
  let component: FeaturedPlaylistComponent;
  let fixture: ComponentFixture<FeaturedPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
