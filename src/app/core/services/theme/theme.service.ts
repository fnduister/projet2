import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Theme } from "../../models/theme/theme.module";

const ThemesData = [{
  name: "student",
  css_name: "student-main-theme"
},
{
  name: "teacher",
  css_name: "teacher-main-theme"
}]

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private themeProvider = new BehaviorSubject<string>("student-main-theme");
  currentTheme$: Observable<string> = this.themeProvider.asObservable();

  constructor() {}

  changeTheme = (theme_name: string) => {
    const newTheme: Theme = ThemesData.find(theme => theme.name === theme_name);
    if(newTheme){
      this.themeProvider.next(newTheme.css_name);
    }
  }
}
