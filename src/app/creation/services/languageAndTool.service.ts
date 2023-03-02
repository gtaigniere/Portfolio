import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {LanguageAndTool} from '../models/languageAndTool';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Portfolio"
export class LanguageAndToolService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getLanguagesAndTools(): Observable<LanguageAndTool[]> {
    return this.db.list('languagesAndTools').valueChanges() as Observable<LanguageAndTool[]>;
  }

  getLanguageAndToolById(id: string): Observable<LanguageAndTool> {
    return this.db.object<LanguageAndTool>(`languagesAndTools/${id}`).valueChanges() as Observable<LanguageAndTool>;
  }

}
