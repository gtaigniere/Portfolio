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

  /*
  getCategories(): Observable<Category[]> {
    const categoriesRef = collection(this.firestore, 'categories');
    return collectionData(categoriesRef, {idField: 'id'}) as Observable<Category[]>;
  }

  getCategoryById(id: string): Observable<Category> {
    const categoryRef = doc(this.firestore, `categories/${id}`);
    return docData(categoryRef, {idField: 'id'}) as Observable<Category>;
  }

  addCategory(category: Category) {
    const categoryRef = collection(this.firestore, 'categories');
    return addDoc(categoryRef, category);
  }

  updateCategory(category: Category) {
    const categoryRef = doc(this.firestore, `categories/${category.id}`);

    return setDoc(categoryRef, category);
  }

  deleteCategory(category: Category) {
    const categoryRef = doc(this.firestore, `snippets/${category.id}`);
    return deleteDoc(categoryRef);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this._url + 'categories').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getCategoryById(id: number): Observable<Category|undefined> {
    return this.http.get<Category>(this._url + 'categories/' + id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: Category[]|Category|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  */
}
