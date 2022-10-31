import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LanguageService } from './services/language.service';
import { CategoryService } from './services/category.service';
import { CreationService } from 'src/app/portfolio/services/creation.service';

import { PortfolioComponent } from './portfolio.component';
import { CreationDetailComponent } from './components/creation-detail/creation-detail.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    CreationDetailComponent
  ],
  exports: [
    PortfolioComponent,
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
    LanguageService
  ]
})
export class PortfolioModule { }
