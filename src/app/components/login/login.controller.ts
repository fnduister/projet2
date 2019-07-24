import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.view.html",
  styleUrls: ["./login.styl"]
})
export class LoginController {
  name: string = "Aicha Miloudi";
  town: string = "Montreal";
  age: number = 21;
  OkcComponent;
}
