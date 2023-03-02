import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreationRoutingModule} from './creation-routing.module';
import {SharedModule} from '../shared/shared.module';

import {LanguageAndToolService} from './services/languageAndTool.service';
import {CategoryService} from './services/category.service';
import {CreationService} from 'src/app/creation/services/creation.service';

import {CreationListComponent} from './pages/creation-list/creation-list.component';
import {CreationDetailComponent} from './pages/creation-detail/creation-detail.component';
import {CreationsResolver} from "./resolvers/creations.resolver";
import {CreationResolver} from "./resolvers/creation.resolver";

@NgModule({
  declarations: [
    CreationListComponent,
    CreationDetailComponent
  ],
  exports: [
    CreationListComponent,
    CreationDetailComponent
  ],
  imports: [
    CommonModule,
    CreationRoutingModule,
    SharedModule
  ],
  providers: [
    CreationService,
    CategoryService,
    LanguageAndToolService,
    CreationsResolver,
    CreationResolver
  ]
})
export class CreationModule { }
