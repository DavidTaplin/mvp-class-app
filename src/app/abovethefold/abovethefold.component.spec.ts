import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbovethefoldComponent } from './abovethefold.component';

describe('AbovethefoldComponent', () => {
  let component: AbovethefoldComponent;
  let fixture: ComponentFixture<AbovethefoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbovethefoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbovethefoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
