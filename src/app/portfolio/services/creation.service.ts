import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Creation } from '../../models/creation';

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CreationService {
  private _url: string = "http://localhost:3000/";
  
  constructor(private http: HttpClient) { }

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

  /*
  updatePicture(creation: ICreation) {
    creation.picture = creation.title.replace(/ /g, '-').toLowerCase() + '.png';
    return creation;
  };
  */

}
