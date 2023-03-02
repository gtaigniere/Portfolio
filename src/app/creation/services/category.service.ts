import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Category} from "../models/category";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CategoryService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getCategories(): Observable<Category[]> {
    return this.db.list('categories').valueChanges() as Observable<Category[]>;
  }

  getCategoryById(id: string): Observable<Category> {
    return this.db.object<Category>(`categories/${id}`).valueChanges() as Observable<Category>;
  }

}
