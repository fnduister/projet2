import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";
import { CodeNode } from "source-list-map";

@Component({
  selector: "app-login",
  templateUrl: "./login.view.html",
  styleUrls: ["./login.scss"]
})
export class LoginController {
  items: string[] = ["uni1", "uni2"];
  errors: { code: string; message: string };
  message: string;

  onSubmit(form: NgForm) {
    console.log(form);
    this.login(form.value);
  }

  constructor(private auth: AuthService, private router: Router) {}

  async login({ email, password, university }) {
    try {
      await this.auth.emailSignin({ email, password, university });
      console.log("loggin in");
      this.router.navigate([""]);
    } catch (err) {
      this.errors = err;
      console.log({ error: this.errors.message });
      if (this.errors.code == "auth/invalid-email") {
        this.message = "Enter a valid email";
      } else if (this.errors.code == "auth/wrong-password") {
        this.message = "The password is invalid";
      } else if (this.errors.code == "auth/user-not-found") {
        this.message = " Email doesn't correspond to an existing user";
      }
    }
  }
  logout() {
    this.auth.signOut();
  }
}
