import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Label } from '../models/label';

@Injectable() // Service injecté au niveau du module "Snippet"
export class LabelService {
  private _url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

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
}
