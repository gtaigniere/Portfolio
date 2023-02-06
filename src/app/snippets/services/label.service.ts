import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc} from "@angular/fire/firestore";

import {Label} from '../../models/label';

@Injectable() // Service injecté au niveau du module "Snippet"
export class LabelService {
  private _url: string = "http://localhost:3000/";

  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

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
  */

  /*
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
