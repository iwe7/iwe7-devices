
### 各种设备屏幕
> diy预览必备

![各种设备屏幕](./assets/002.gif)

- install
```ts
yarn add iwe7-devices
```

```ts
import { DevicesModule } from "iwe7-devices";
@NgModule({
  imports: [eDevicesModule]
})
export class TestDevicesModule {
}
```

```html
<!--所有设备-->
<devices>
<!--展示内容-->
</devices>

<!--htc-one-->
<device-htc-one>
<!--展示内容-->
</device-htc-one>

<!--ipad-->
<device-ipad>
<!--展示内容-->
</device-ipad>

<!--iphone4s-->
<device-iphone4s>
<!--展示内容-->
</device-iphone4s>

<!--iphone5c-->
<device-iphone5c>
<!--展示内容-->
</device-iphone5c>

<!--iphone5s-->
<device-iphone5s>
<!--展示内容-->
</device-iphone5s>

<!--iphone8-->
<device-iphone8>
<!--展示内容-->
</device-iphone8>

<!--iphone8plus-->
<device-iphone8plus>
<!--展示内容-->
</device-iphone8plus>

<!--iphonex-->
<device-iphonex>
<!--展示内容-->
</device-iphonex>

<!--lumia920-->
<device-lumia920>
<!--展示内容-->
</device-lumia920>

<!--macbook-->
<device-macbook>
<!--展示内容-->
</device-macbook>


<!--nexus5-->
<device-nexus5>
<!--展示内容-->
</device-nexus5>

<!--note8-->
<device-note8>
<!--展示内容-->
</device-note8>

<!--s5-->
<device-s5>
<!--展示内容-->
</device-s5>
```


- [git项目地址](https://github.com/iwe7/iwe7-devices)
