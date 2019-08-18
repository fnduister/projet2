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
      console.log({error: this.errors.message});
    }
  }
  logout() {
    this.auth.signOut();
  }
}
