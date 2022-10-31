import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Snippet } from '../../models/snippet';
import { Label } from '../../models/label';

@Injectable() // Service injecté au niveau du module "Snippet"
export class SnippetService {
  private _url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

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

  // getSnippetsByLabels(labels: Label[]): Observable<Snippet[]> {
  //   return this.http.get<Snippet[]>(this._url + 'snippets').pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, []))
  //   );
  // }

  private log(response: Snippet[]|Snippet|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
