import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceHtcOneComponent } from './device-htc-one.component';

describe('DeviceHtcOneComponent', () => {
  let component: DeviceHtcOneComponent;
  let fixture: ComponentFixture<DeviceHtcOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceHtcOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceHtcOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
