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
    // return this.db.list('snippets', query => query.orderByChild('title')).valueChanges() as Observable<Snippet[]>;
    // return this.db.list('snippets', query => query.orderByChild('title').equalTo('Debugage')).valueChanges() as Observable<Snippet[]>;
  }

  getSnippetById(id: string): Observable<Snippet> {
    return this.db.object<Snippet>(`snippets/${id}`).valueChanges() as Observable<Snippet>;
  }

}
