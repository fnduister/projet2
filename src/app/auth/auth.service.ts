import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

export interface User {
  uid: string;
  email: string;
  password: string;
  displayName: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // this.user$ = afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>("users/${user.id}");
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
  }
  
  //need to correct this
  async emailSingin() {
    // const provider = new auth.EmailAuthProvider();

    const credential = await this.afAuth.auth.signInWithEmailAndPassword('test@test.com', 'testme');
    console.log({credential});
    // return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/login"]);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
      "users/${user.id}"
    );
    const data = {
      uid: user.uid,
      email: user.email,
      password: user.password,
      displayName: user.displayName
    };
    return userRef.set(data, { merge: true });
  }
}
