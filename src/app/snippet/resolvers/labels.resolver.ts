import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LabelService} from "../services/label.service";
import {Label} from "../models/label";

@Injectable()
export class LabelsResolver implements Resolve<Label[]> {

  constructor(
    private labelService: LabelService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Label[]> {
    return this.labelService.getLabels();
  }
}
