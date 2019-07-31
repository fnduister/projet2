import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "./../../core/services/firestore/firestore.service";
import { Observable } from "rxjs";
import { Course, Group } from "../../core/models/firestore";

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController implements OnInit {
  private courses$: Observable<Group[]>;
  constructor(private db: FirestoreService<Group>) {}
  text: string = "in dashboard";

  ngOnInit(){

    this.courses$ = this.db.getCoursesWithIds();
    // this.bd.addCourse({title: "maman", tps:["asdfasdfas", "aqsdfasdfa"], teacher: "asdfasdfasd"});
    console.log({courseWithIds: this.db.getCoursesWithIds()});
  };
}
