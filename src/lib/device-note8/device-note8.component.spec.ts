import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceNote8Component } from './device-note8.component';

describe('DeviceNote8Component', () => {
  let component: DeviceNote8Component;
  let fixture: ComponentFixture<DeviceNote8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceNote8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceNote8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
