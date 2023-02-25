import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CreationService} from 'src/app/portfolio/services/creation.service';
import {Creation} from 'src/app/portfolio/models/creation';

@Component({
  selector: 'app-creation-list',
  templateUrl: 'creation-list.component.html',
  styleUrls: ['creation-list.component.scss']
})
export class CreationListComponent implements OnInit {

  title: string = "Portfolio";

  readonly PICTURE_URL: string = '../../assets/imgs/creations/';
  creations: Creation[];

  constructor(
    private creationService: CreationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.creationService.getCreations().subscribe(
      creations => this.creations = creations
    );
  }

  goToCreation(id: string) {
    this.router.navigate(['/portfolio/creations', id]);
  }

}
