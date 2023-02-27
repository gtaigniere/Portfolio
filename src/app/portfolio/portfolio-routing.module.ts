import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CreationListComponent} from './pages/creation-list/creation-list.component';
import {CreationDetailComponent} from './pages/creation-detail/creation-detail.component';
import {CreationsResolver} from "./resolvers/creations.resolver";
import {CreationResolver} from "./resolvers/creation.resolver";

const routes = [
  { path: 'creations', component: CreationListComponent, resolve: { creations: CreationsResolver }},
  { path: 'creations/:id', component: CreationDetailComponent, resolve: { creation: CreationResolver }},
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
