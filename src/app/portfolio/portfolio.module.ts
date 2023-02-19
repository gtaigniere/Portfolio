import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {SharedModule} from '../shared/shared.module';

import {LanguageAndToolService} from './services/languageAndTool.service';
import {CategoryService} from './services/category.service';
import {CreationService} from 'src/app/portfolio/services/creation.service';

import {CreationListComponent} from './pages/creation-list/creation-list.component';
import {CreationDetailComponent} from './pages/creation-detail/creation-detail.component';

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
    PortfolioRoutingModule,
    SharedModule
  ],
  providers: [
    CreationService,
    CategoryService,
    LanguageAndToolService
  ]
})
export class PortfolioModule { }
