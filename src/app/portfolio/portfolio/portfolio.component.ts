import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreationService } from 'src/app/services/creation.service';

import { Creation } from 'src/app/models/creation';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public title: string = "Portfolio";

  public PICTURE_URL: string = '../../assets/imgs/creations/';
  public creations: Creation[];
  public errMsg: string;

  constructor(private creationService: CreationService,
    private router: Router) { }

  ngOnInit() {
    this.creationService.getCreations().subscribe({
      next: creations => this.creations = creations,
      error: err => this.errMsg = err
    });
  }

  goToCreation(id: number) {
    this.router.navigate(['/portfolio/creation', id]);
  }

}
