import { Injectable, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists
} from "@angular/fire/firestore";
import { Observable, from } from "rxjs";
import {
  map,
  tap,
  take,
  switchMap,
  mergeMap,
  expand,
  takeWhile
} from "rxjs/operators";
import { Course, Group } from "./../../models/firestore";

@Injectable({
  providedIn: "root"
})
export class FirestoreService<T> implements OnInit {
  private coursesCollection: AngularFirestoreCollection<Course>;
  private groupsCollection: AngularFirestoreCollection<Group>;

  constructor(private afs: AngularFirestore,private collectionName: string) {
    this.coursesCollection = this.afs.collection<Course>("groups");
    this.groupsCollection = this.afs.collection<Group>("groups");
  }
  
  ngOnInit() {}
  
  getCourses = () : Observable<Course[]>  => {
    return this.coursesCollection.valueChanges();
  }

  getGroups = () : Observable<Group[]>  => {
    return this.groupsCollection.valueChanges();
  }

  addElement = <T>(element: T, collection: AngularFirestor   eCollection<T>) : void => {
    collection.add(element);
  }  

  addElement = <T>(element: T, collection: AngularFirestoreCollection<T>) : void => {
    this.currentCollection.add(element);
  }

  getCoursesWithIds = () : Observable<T[]> => {
    return this.currentCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data: T = a.payload.doc.data();
        const id: string = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  
}
