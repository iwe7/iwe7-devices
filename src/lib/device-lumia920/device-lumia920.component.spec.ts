import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLumia920Component } from './device-lumia920.component';

describe('DeviceLumia920Component', () => {
  let component: DeviceLumia920Component;
  let fixture: ComponentFixture<DeviceLumia920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLumia920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLumia920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
