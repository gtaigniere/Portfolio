import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CreationListComponent} from './pages/creation-list/creation-list.component';
import {CreationDetailComponent} from './pages/creation-detail/creation-detail.component';

const routes = [
  { path: 'creations', component: CreationListComponent },
  { path: 'creation/:id', component: CreationDetailComponent },
  { path: '', component: CreationListComponent }
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
