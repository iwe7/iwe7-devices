import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DevicesComponent } from "./devices.component";
import { DeviceNote8Component } from "./device-note8/device-note8.component";
import { DeviceIphonexComponent } from "./device-iphonex/device-iphonex.component";
import { DeviceMacbookComponent } from "./device-macbook/device-macbook.component";
import { DeviceIpadComponent } from "./device-ipad/device-ipad.component";
import { DeviceHtcOneComponent } from "./device-htc-one/device-htc-one.component";
import { DeviceLumia920Component } from "./device-lumia920/device-lumia920.component";
import { DeviceS5Component } from "./device-s5/device-s5.component";
import { DeviceNexus5Component } from "./device-nexus5/device-nexus5.component";
import { DeviceIphone4sComponent } from "./device-iphone4s/device-iphone4s.component";
import { DeviceIphone5cComponent } from "./device-iphone5c/device-iphone5c.component";
import { DeviceIphone5sComponent } from "./device-iphone5s/device-iphone5s.component";
import { DeviceIphone8plusComponent } from "./device-iphone8plus/device-iphone8plus.component";
import { DeviceIphone8Component } from "./device-iphone8/device-iphone8.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    DevicesComponent,
    DeviceNote8Component,
    DeviceIphonexComponent,
    DeviceMacbookComponent,
    DeviceIpadComponent,
    DeviceHtcOneComponent,
    DeviceLumia920Component,
    DeviceS5Component,
    DeviceNexus5Component,
    DeviceIphone4sComponent,
    DeviceIphone5cComponent,
    DeviceIphone5sComponent,
    DeviceIphone8plusComponent,
    DeviceIphone8Component
  ],
  exports: [
    DevicesComponent,
    DeviceNote8Component,
    DeviceIphonexComponent,
    DeviceMacbookComponent,
    DeviceIpadComponent,
    DeviceHtcOneComponent,
    DeviceLumia920Component,
    DeviceS5Component,
    DeviceNexus5Component,
    DeviceIphone4sComponent,
    DeviceIphone5cComponent,
    DeviceIphone5sComponent,
    DeviceIphone8plusComponent,
    DeviceIphone8Component
  ],
  entryComponents: [DevicesComponent]
})
export class DevicesModule {
  get(key: string) {
    return DevicesComponent;
  }
}
