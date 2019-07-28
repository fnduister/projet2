import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./core/services/theme/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private theme: string;
  constructor(private themeProvider: ThemeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.themeProvider.currentTheme$.subscribe(theme => (this.theme = theme));
    console.log({theme: this.theme});
  }
  title = "polyTeam";
}
