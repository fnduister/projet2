import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({ providedIn: "root" })
export class AuthService implements OnInit {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>("users/${user.uid}").valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  ngOnInit() {}

  //need to correct this
  async emailSignin({ email, password, university }) {
    try {
      const credential = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );

      this.updateUserData(credential.user);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/login"]);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
      "users/${user.uid}"
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      courses: ["user.courses"],
      role: "student"
    };

    return userRef.set(data, { merge: true });
  }
}
