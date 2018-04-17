import {
  Component,
  OnInit,
  ViewEncapsulation,
  ContentChild,
  TemplateRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DevicesComponent implements OnInit {
  list: any[] = [
    {
      title: "htc-one"
    },
    {
      title: "ipad"
    },
    {
      title: "iphone4s"
    },
    {
      title: "iphone5c"
    },
    {
      title: "iphone5s"
    },
    {
      title: "iphone8"
    },
    {
      title: "iphone8plus"
    },
    {
      title: "iphonex"
    },
    {
      title: "lumia920"
    },
    {
      title: "macbook"
    },
    {
      title: "nexus5"
    },
    {
      title: "note8"
    },
    {
      title: "s5"
    }
  ];

  activated: string = "iphonex";

  @ViewChild("screen", {
    read: TemplateRef
  })
  screen: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}

  _active(item) {
    this.activated = item.title;
  }
}
