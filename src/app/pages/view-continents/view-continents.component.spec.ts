import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContinentsComponent } from './view-continents.component';

describe('ViewContinentsComponent', () => {
  let component: ViewContinentsComponent;
  let fixture: ComponentFixture<ViewContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContinentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
