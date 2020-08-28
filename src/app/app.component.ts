import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "camera";
  options = {
    autoplay: true,
    controls: false,
    width: 640,
    height: 360,
    sources: [
      {
        src: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
}
