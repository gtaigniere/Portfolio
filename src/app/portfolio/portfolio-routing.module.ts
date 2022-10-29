import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

const routes = [
  { path: 'creations', component: PortfolioComponent },
  { path: 'creation/:id', component: PortfolioDetailComponent },
  { path: '', component: PortfolioComponent }
];

@NgModule({
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PortfolioRoutingModule { }
