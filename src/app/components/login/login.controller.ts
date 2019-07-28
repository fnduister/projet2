import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.view.html",
  styleUrls: ["./login.scss"]
})
export class LoginController {
  name: string = "Aicha Miloudi";

  lastname: string = "";
  town: string = "Montreal";
  age: number = 21;
  OkcComponent;
}
