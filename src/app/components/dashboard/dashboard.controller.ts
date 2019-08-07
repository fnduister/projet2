import { Component } from "@angular/core";
import { ɵHttpInterceptingHandler } from '@angular/common/http';

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController {
    text: string = "in dashboard";
}

