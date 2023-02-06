import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc} from "@angular/fire/firestore";

import {Creation} from '../../models/creation';

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CreationService {
  private _url: string = "http://localhost:3000/";
  
  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

  getCreations(): Observable<Creation[]> {
    const snippetsRef = collection(this.firestore, 'creations');
    return collectionData(snippetsRef, {idField: 'id'}) as Observable<Creation[]>;
  }

  getCreationById(id: string): Observable<Creation> {
    const snippetRef = doc(this.firestore, `creations/${id}`);
    return docData(snippetRef, {idField: 'id'}) as Observable<Creation>;
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
