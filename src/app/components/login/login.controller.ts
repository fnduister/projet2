import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.view.html",
  styleUrls: ["./login.scss"]
})
export class LoginController {
  items: string[] = ["uni1", "uni2"];

  onSubmit(form: NgForm) {
    console.log(form);
    this.login(form.value);
  }

  constructor(private auth: AuthService,private router:Router) {}

  login({ email, password, university }) {
    this.auth.emailSignin({ email, password, university });
    console.log("loggin in");
    return this.router.navigate([" "]);
  }
  logout() {
    this.auth.signOut();
  }
}
