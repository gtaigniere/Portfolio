import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CreationService} from "../services/creation.service";
import {CategoryService} from "../services/category.service";
import {LanguageAndToolService} from "../services/languageAndTool.service";
import {Creation} from "../models/creation";
import {Category} from "../models/category";

@Injectable()
export class CreationResolver implements Resolve<Creation> {

  creation$: Observable<Creation>;
  categories: Category[] = [];

  constructor(
    private creationService: CreationService,
    private categoryService: CategoryService,
    private languageAndToolService: LanguageAndToolService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Creation> {
    const id = route.paramMap.get('id') as string;
    this.creation$ = this.creationService.getCreationById(id);
    return this.creation$;
  }
}
