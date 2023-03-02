import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Creation} from '../models/creation';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CreationService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getCreations(): Observable<Creation[]> {
    return this.db.list('creations').valueChanges() as Observable<Creation[]>;
  }

  getCreationById(id: string): Observable<Creation> {
    return this.db.object<Creation>(`creations/${id}`).valueChanges() as Observable<Creation>;
  }

  addCreation(creation: Creation) {
    this.db.object('creations').set({
      title: '',
      description: '',
      year: 2000,
      picture: '',
      categories: [
        {name: ''}
      ],
      languagesAndTools: [
        {name: ''}
      ]
    });
  }

  updCreation(creation: Creation) {
    this.db.object('creations').update({
      title: '',
      description: '',
      year: 2000,
      picture: '',
      categories: [
        {name: ''}
      ],
      languagesAndTools: [
        {name: ''}
      ]
    });
  }

  delCreation(creation: Creation) {
    this.db.object('creations').remove();
  }

}
