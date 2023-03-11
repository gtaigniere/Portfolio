import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Snippet} from "../models/snippet";

@Injectable() // Service injecté au niveau du module "Snippet"
export class SnippetContextService {

  snippetBehavSub = new BehaviorSubject<Snippet|null>(null);

  constructor(
  ) {}

  set currentSnippet(snippet: Snippet) {
    this.snippetBehavSub.next(snippet);
  }

  get currentSnippet$(): Observable<Snippet|null> {
    return this.snippetBehavSub.asObservable();
  }

}
