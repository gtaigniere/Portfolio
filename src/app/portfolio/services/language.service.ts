import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Language } from '../../models/language';

@Injectable() // Service injecté au niveau du module "Portfolio"
export class LanguageService {
  private _url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this._url + 'langages').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getLanguageById(id: number): Observable<Language|undefined> {
    return this.http.get<Language>(this._url + 'langages/' + id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Language[]|Language|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}
