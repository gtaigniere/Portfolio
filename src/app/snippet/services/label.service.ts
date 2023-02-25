import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Label} from '../models/label';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Snippet"
export class LabelService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getLabels(): Observable<Label[]> {
    return this.db.list('labels').valueChanges() as Observable<Label[]>;
  }

  getLabelById(id: string): Observable<Label> {
    return this.db.object<Label>(`labels/${id}`).valueChanges() as Observable<Label>;
  }

  /*
  getLabels(): Observable<Label[]> {
    const labelsRef = collection(this.firestore, 'labels');
    return collectionData(labelsRef, {idField: 'id'}) as Observable<Label[]>;
  }

  getLabelById(id: string): Observable<Label> {
    const labelRef = doc(this.firestore, `labels/${id}`);
    return docData(labelRef, {idField: 'id'}) as Observable<Label>;
  }

  addLabel(label: Label) {
    const labelRef = collection(this.firestore, 'labels');
    return addDoc(labelRef, label);
  }

  updateLabel(label: Label) {
    const labelRef = doc(this.firestore, `labels/${label.id}`);

    return setDoc(labelRef, label);
  }

  deleteLabel(label: Label) {
    const labelRef = doc(this.firestore, `labels/${label.id}`);
    return deleteDoc(labelRef);
  }

  /*
  getLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this._url + 'labels').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getLabelById(id: number): Observable<Label> {
    return this.http.get<Label>(this._url + 'labels/' + id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Label[]|Label|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  */
}
