import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {SnippetService} from "../services/snippet.service";
import {Snippet} from "../models/snippet";

@Injectable()
export class SnippetsResolver implements Resolve<Snippet[]> {

  constructor(
    private snippetService: SnippetService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Snippet[]> {
    return this.snippetService.getSnippets();
  }
}
