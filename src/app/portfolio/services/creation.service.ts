import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {addDoc, collection, deleteDoc, doc, docData, Firestore, setDoc} from "@angular/fire/firestore";

import {Creation} from '../models/creation';
import {AngularFireDatabase} from "@angular/fire/compat/database";

let headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  .set('Content-Type', 'application/json');

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CreationService {
  private _url: string = "http://localhost:3000/";
  private DB_URL: string = "https://portfolio-d29f2-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(
      private db: AngularFireDatabase,
    private http: HttpClient
  ) { }

  // getCreations(): Observable<Creation[]> {
  //   const creationRef = collection(this.firestore, 'creations');
  //   return collectionData(creationRef, {idField: 'id'}) as Observable<Creation[]>;
  // }

  getCreations(): Observable<Creation[]> {
    return this.db.list('creations').valueChanges() as Observable<Creation[]>;
    // return this.http.get<Creation[]>(this.DB_URL + 'creations');
  }

  getCreationById(id: string): Observable<Creation> {
    // const creationRef = doc(this.firestore, `creations/${id}`);
    // return docData(creationRef, {idField: 'id'}) as Observable<Creation>;
    return of();
  }

  addCreation(creation: Creation) {
    // const creationRef = collection(this.firestore, 'creations');
    // return addDoc(creationRef, creation);
    return of();
  }

  updateCreation(creation: Creation) {

    // return setDoc(creationRef, creation);

    return of();
  }

  deleteCreation(creation: Creation) {
    // const creationRef = doc(this.firestore, `creation/${creation.id}`);
    // return deleteDoc(creationRef);
    return of();
  }

  getCreationsByCategory() {

  }

  getCreationsByLanguageAndTool() {

  }

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
