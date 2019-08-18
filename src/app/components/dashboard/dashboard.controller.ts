import { Component } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "./../../auth/user.model";

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController {
  text: string = "in dashboard";
  constructor(private auth: AuthService) {}

  login() {
    this.auth.emailSignin({
      email: "test@test.com",
      password: "testme",
      university: "uni1"
    });
    console.log("loggin in");
  }
  logout() {
    this.auth.signOut();
  }
}
