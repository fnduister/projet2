import { Component } from "@angular/core";
import { AuthService } from 'src/app/auth/auth.service';
import { User } from './../../auth/auth.service';

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController {
    text: string = "in dashboard";
    user: User;
    constructor(private auth: AuthService){
      auth.user$.subscribe(user => this.user = user);
    }

  login(){
    this.auth.emailSignin();
    console.log("loggin in");
  }
  logout(){
    this.auth.signOut();
  }

}
