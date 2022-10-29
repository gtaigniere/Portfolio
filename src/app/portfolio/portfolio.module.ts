import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LanguageService } from './../services/language.service';
import { CategoryService } from './../services/category.service';
import { CreationService } from 'src/app/services/creation.service';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioDetailComponent
  ],
  exports: [
    PortfolioComponent,
    PortfolioDetailComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ],
  providers: [
    CreationService,
    CategoryService,
    LanguageService
  ]
})
export class PortfolioModule { }
