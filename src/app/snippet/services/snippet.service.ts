import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Snippet} from '../models/snippet';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Snippet"
export class SnippetService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getSnippets(): Observable<Snippet[]> {
    return this.db.list('snippets').valueChanges() as Observable<Snippet[]>;
  }

  getSnippetById(id: string): Observable<Snippet> {
    return this.db.object<Snippet>(`snippets/${id}`).valueChanges() as Observable<Snippet>;
  }

  /*
  getSnippets(): Observable<Snippet[]> {
    const snippetsRef = collection(this.firestore, 'snippets');
    return collectionData(snippetsRef, {idField: 'id'}) as Observable<Snippet[]>;
  }

  getSnippetById(id: string): Observable<Snippet> {
    const snippetRef = doc(this.firestore, `snippets/${id}`);
    return docData(snippetRef, {idField: 'id'}) as Observable<Snippet>;
  }

  addSnippet(snippet: Snippet) {
    const snippetRef = collection(this.firestore, 'snippets');
    return addDoc(snippetRef, snippet);
  }

  updateSnippet(snippet: Snippet) {
    const snippetRef = doc(this.firestore, `snippets/${snippet.id}`);

    return setDoc(snippetRef, snippet);
  }

  deleteSnippet(snippet: Snippet) {
    const snippetRef = doc(this.firestore, `snippets/${snippet.id}`);
    return deleteDoc(snippetRef);
  }

  // getSnippetsByCreator(creator: string): Snippet[] {
  // }

  // getSnippetsByLabel(labelId: string): Snippet[] {
  // }

  getSnippets(): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this._url + 'snippets').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getSnippetById(id: number): Observable<Snippet> {
    return this.http.get<Snippet>(this._url + 'snippets/' + id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getSnippetsByLabel(labelName: string): Observable<Snippet> {
    return this.http.get<Snippet>(this._url + 'snippets/' + labelName).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getSnippetNumberByLabel(labelName: string): Observable<number> {
    return this.http.get<number>(this._url + 'snippets/' + labelName + '/nb').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Snippet[]|Snippet|number|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  */
}
