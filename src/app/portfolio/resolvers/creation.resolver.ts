import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CreationService} from "../services/creation.service";
import {Creation} from "../models/creation";

@Injectable()
export class CreationResolver implements Resolve<Creation> {

  constructor(
    private creationService: CreationService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Creation> {
    const id = route.paramMap.get('id') as string;
    return this.creationService.getCreationById(id);
  }
}
