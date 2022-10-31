import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SnippetService } from './services/snippet.service';
import { LabelService } from './services/label.service';

import { SnippetsComponent } from './snippets.component';
import { SnippetFilterComponent } from './components/snippet-filter/snippet-filter.component';
import { SnippetListHeader } from './components/snippet-list-header/snippet-list-header.component';
import { SnippetListComponent } from './components/snippet-list/snippet-list.component';
import { SnippetDetailHeaderComponent } from './components/snippet-detail-header/snippet-detail-header.component';
import { SnippetDetailComponent } from './components/snippet-detail/snippet-detail.component';
import { SnippetCardComponent } from './components/snippet-card/snippet-card.component';
import { SnippetLabelComponent } from './components/snippet-label/snippet-label.component';

@NgModule({
  declarations: [
    SnippetsComponent,
    SnippetFilterComponent,
    SnippetListHeader,
    SnippetListComponent,
    SnippetDetailHeaderComponent,
    SnippetDetailComponent,
    SnippetCardComponent,
    SnippetLabelComponent
  ],
  exports: [
    SnippetsComponent
  ],
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    SharedModule
  ],
  providers: [
    SnippetService,
    LabelService
  ]
})
export class SnippetsModule { }
