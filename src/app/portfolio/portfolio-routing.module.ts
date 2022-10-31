import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { CreationDetailComponent } from './components/creation-detail/creation-detail.component';

const routes = [
  { path: 'creations', component: PortfolioComponent },
  { path: 'creation/:id', component: CreationDetailComponent },
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
