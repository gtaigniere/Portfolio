import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Label} from '../models/label';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Snippet"
export class LabelService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getLabels(): Observable<Label[]> {
    return this.db.list('labels').valueChanges() as Observable<Label[]>;
  }

  getLabelById(id: string): Observable<Label> {
    return this.db.object<Label>(`labels/${id}`).valueChanges() as Observable<Label>;
  }

}
