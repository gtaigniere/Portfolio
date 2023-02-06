import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc} from "@angular/fire/firestore";

import {LanguageAndTool} from '../../models/languageAndTool';

@Injectable() // Service injecté au niveau du module "Portfolio"
export class LanguageAndToolService {
  private _url: string = "http://localhost:3000/";

  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

  getLanguagesAndTools(): Observable<LanguageAndTool[]> {
    const languagesAndToolsRef = collection(this.firestore, 'languages_tools');
    return collectionData(languagesAndToolsRef, {idField: 'id'}) as Observable<LanguageAndTool[]>;
  }

  getLanguageAndToolById(id: string): Observable<LanguageAndTool> {
    const languageAndToolRef = doc(this.firestore, `languages_tools/${id}`);
    return docData(languageAndToolRef, {idField: 'id'}) as Observable<LanguageAndTool>;
  }

  addLanguageAndTool(languageAndTool: LanguageAndTool) {
    const languageAndToolRef = collection(this.firestore, 'languages_tools');
    return addDoc(languageAndToolRef, languageAndTool);
  }

  updateLanguageAndTool(languageAndTool: LanguageAndTool) {
    const languageAndToolRef = doc(this.firestore, `languages_tools/${languageAndTool.id}`);

    return setDoc(languageAndToolRef, languageAndTool);
  }

  deleteLanguageAndTool(languageAndTool: LanguageAndTool) {
    const languageAndToolRef = doc(this.firestore, `languages_tools/${languageAndTool.id}`);
    return deleteDoc(languageAndToolRef);
  }

  /*
  getLanguagesAndTools(): Observable<LanguageAndTool[]> {
    return this.http.get<LanguageAndTool[]>(this._url + 'langages').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getLanguageAndToolById(id: number): Observable<LanguageAndTool|undefined> {
    return this.http.get<LanguageAndTool>(this._url + 'langages/' + id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: LanguageAndTool[]|LanguageAndTool|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  */
}
