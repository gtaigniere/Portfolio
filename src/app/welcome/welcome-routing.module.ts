import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {WelcomeComponent} from './welcome.component';

const routes = [
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeRoutingModule {
}
