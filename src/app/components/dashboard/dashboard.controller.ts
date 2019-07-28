import { Component } from "@angular/core";

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController {
    text: string = "in dashboard";
}
