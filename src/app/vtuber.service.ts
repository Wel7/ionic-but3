import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Vtuber } from './models/vtuber.model';

@Injectable({
  providedIn: 'root',
})
export class VtuberService {
  private dbPath = '/vtuber';
  vtuberRef: AngularFirestoreCollection<Vtuber>;

  constructor(private db: AngularFirestore) {
    this.vtuberRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.vtuberRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
        });
      })
    );
  }

  saveNewVtuber(vtuber: Vtuber): any {
    return new Observable((obs) => {
      this.vtuberRef
        .add({ ...vtuber })
        .then(() => {
          obs.next();
        })
        .then(() => {
          console.log('CA MARCHE SUR LE PAPIER');
        })
        .catch((error) => {
          console.error('Error adding VTuber to Firebase:', error);
          throw error;
        });
    });
  }

  get(id: any): any {
    return new Observable((obs) => {
      this.vtuberRef
        .doc(id)
        .get()
        .subscribe((res) => {
          obs.next({ id: res.id, ...res.data() });
        });
    });
  }

  update(vtuber: Vtuber) {
    return new Observable((obs) => {
      this.vtuberRef.doc(vtuber.id).update(vtuber);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`vtuber/${id}`).delete();
  }
}
