import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIphonexComponent } from './device-iphonex.component';

describe('DeviceIphonexComponent', () => {
  let component: DeviceIphonexComponent;
  let fixture: ComponentFixture<DeviceIphonexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIphonexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIphonexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
