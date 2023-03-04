import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Snippet} from "../models/snippet";

@Injectable() // Service injecté au niveau du module "Snippet"
export class SnippetContextService {

  private snippetSubject = new Subject<Snippet>();

  constructor() { }

  set sendSnippetSubject(snippet: Snippet) {
    this.snippetSubject.next(snippet);
  }

  get selectedSnippet$(): Observable<Snippet> {
    return this.snippetSubject.asObservable();
  }

}
