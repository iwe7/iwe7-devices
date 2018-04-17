import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMacbookComponent } from './device-macbook.component';

describe('DeviceMacbookComponent', () => {
  let component: DeviceMacbookComponent;
  let fixture: ComponentFixture<DeviceMacbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMacbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
