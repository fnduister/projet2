import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "./../../core/services/firestore/firestore.service";
import { Observable } from "rxjs";
import { Course, Group } from "../../core/models/firestore";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { addElement } from './../../core/services/firestore/firestore.helpers';


@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardController implements OnInit {
  private courses$: Observable<Course[]>;
  private courseCollection: AngularFirestoreCollection<Course>;
  private text: string = "in dashboard";

  constructor(private asf: AngularFirestore) {
    this.courseCollection = this.asf.collection<Course>("courses");
  }


  ngOnInit(){
    this.courses$ = this.courseCollection.valueChanges();
  };

  addThisElement = ($event) => {
    addElement<Course>({teacher:"barrack", title: "INF4545", tps:["TP1", "TP2"]},this.courseCollection);
  }

  
}
