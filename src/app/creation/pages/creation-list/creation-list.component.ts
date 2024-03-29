import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Creation} from 'src/app/creation/models/creation';

@Component({
  selector: 'app-creation-list',
  templateUrl: 'creation-list.component.html',
  styleUrls: ['creation-list.component.scss']
})
export class CreationListComponent implements OnInit {

  title: string = "Portfolio";

  readonly PICTURE_BASE_PATH: string = '../../assets/imgs/creations/';
  creations: Creation[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.creations = this.activatedRoute.snapshot.data['creations'];
  }

  navigateToCreation(id: string) {
    this.router.navigate(['/creations', (+id - 1).toString()]);
  }

}
