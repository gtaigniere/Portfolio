import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CreationService} from 'src/app/portfolio/services/creation.service';
import {Creation} from 'src/app/models/creation';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title: string = "Portfolio";

  readonly PICTURE_URL: string = '../../assets/imgs/creations/';
  creations: Creation[];

  constructor(
    private creationService: CreationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.creationService.getCreations().subscribe(
      creations => this.creations = creations
    );
  }

  goToCreation(creation: Creation) {
    this.router.navigate(['/portfolio/creation', creation]);
  }

}
