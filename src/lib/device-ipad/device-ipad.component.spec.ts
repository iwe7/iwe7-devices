import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIpadComponent } from './device-ipad.component';

describe('DeviceIpadComponent', () => {
  let component: DeviceIpadComponent;
  let fixture: ComponentFixture<DeviceIpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
