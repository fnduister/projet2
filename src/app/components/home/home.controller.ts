import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.view.html",
  styleUrls: ["./home.scss"]
})
export class HomeController {
  name: string = "Aicha Miloudi";

  lastname: string = "";
  town: string = "Montreal";
  age: number = 21;
}
