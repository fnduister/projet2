import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.view.html",
  styleUrls: ["./login.scss"]
})
export class LoginController {
  items: string[] = ["uni1", "uni2"];
}
