import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc} from "@angular/fire/firestore";

import {Category} from "../models/category";

@Injectable() // Service injecté au niveau du module "Portfolio"
export class CategoryService {
  private _url: string = "http://localhost:3000/";
  
  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

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

  /*
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
