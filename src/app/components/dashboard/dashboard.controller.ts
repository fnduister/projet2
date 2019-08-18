import { Component } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "./../../auth/user.model";

interface Course {
  title: string;
  tps: number;
  tds: number;
  friends: number;
  priority: number;
}
@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController {
  constructor(private auth: AuthService) {}

  courses: Course[] = [
    { title: "LOG2420", tps: 5, tds: 3,friends: 2, priority: 1 },
    { title: "INF4565", tps: 2, tds: 4,friends: 4, priority: 2 },
    { title: "TEC9823", tps: 6, tds: 3,friends: 6, priority: 3 },
    { title: "BIO0234", tps: 1, tds: 2,friends: 5, priority: 1 }
  ];
}
