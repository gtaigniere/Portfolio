import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc} from "@angular/fire/firestore";

import {Snippet} from '../models/snippet';

@Injectable() // Service injecté au niveau du module "Snippet"
export class SnippetService {
  private _url: string = "http://localhost:3000/";

  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

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

  /*
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
