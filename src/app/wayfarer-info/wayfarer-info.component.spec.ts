import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayfarerInfoComponent } from './wayfarer-info.component';

describe('WayfarerInfoComponent', () => {
  let component: WayfarerInfoComponent;
  let fixture: ComponentFixture<WayfarerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayfarerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WayfarerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
