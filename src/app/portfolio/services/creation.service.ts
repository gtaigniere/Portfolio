import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Creation} from '../models/creation';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CreationService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getCreations(): Observable<Creation[]> {
    return this.db.list('creations').valueChanges() as Observable<Creation[]>;
  }

  getCreationById(id: string): Observable<Creation> {
    return this.db.object<Creation>(`creations/${id}`).valueChanges() as Observable<Creation>;
  }

  addCreation(creation: Creation) {
    this.db.object('creations').set({
      title: '',
      description: '',
      year: 2000,
      picture: '',
      categories: [
        {name: ''}
      ],
      languagesAndTools: [
        {name: ''}
      ]
    });
  }

  updCreation(creation: Creation) {
    this.db.object('creations').update({
      title: '',
      description: '',
      year: 2000,
      picture: '',
      categories: [
        {name: ''}
      ],
      languagesAndTools: [
        {name: ''}
      ]
    });
  }

  delCreation(creation: Creation) {
    this.db.object('creations').remove();
  }

  /*
  getCreations(): Observable<Creation[]> {
    const creationRef = collection(this.firestore, 'creations');
    return collectionData(creationRef, {idField: 'id'}) as Observable<Creation[]>;
  }

  getCreationById(id: string): Observable<Creation> {
    const creationRef = doc(this.db, `creations/${id}`);
    return docData(creationRef, {idField: 'id'}) as Observable<Creation>;
  }

  addCreation(creation: Creation) {
    const creationRef = collection(this.firestore, 'creations');
    return addDoc(creationRef, creation);
  }

  updateCreation(creation: Creation) {
    const creationRef = doc(this.firestore, `creations/${creation.id}`);

    return setDoc(creationRef, creation);
  }

  deleteCreation(creation: Creation) {
    const creationRef = doc(this.firestore, `creation/${creation.id}`);
    return deleteDoc(creationRef);
  }

  getCreationsByCategory() {

  }

  getCreationsByLanguageAndTool() {

  }
  */

  /*
  getCreations(): Observable<Creation[]> {
    return this.http.get<Creation[]>(this._url + 'creations').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getCreationById(id: number): Observable<Creation> {
    return this.http.get<Creation>(this._url + 'creations/' + id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Creation[]|Creation|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  */
}
