import {
    firebase,
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

export const addElement = <T>(
  element: T,
  collection: AngularFirestoreCollection<T>
): void => {
  collection.add(element);
};

export const getCoursesWithIds = <T>(
  collection: AngularFirestoreCollection<T>
): Observable<T[]> => {
  return collection.snapshotChanges().pipe(
    map(actions =>
      actions.map(a => {
        const data: T = a.payload.doc.data();
        const id: string = a.payload.doc.id;
        return { id, ...data };
      })
    )
  );
};

export const timestamp = () => {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
