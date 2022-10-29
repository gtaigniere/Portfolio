import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SharedModule } from './../shared/shared.module';

import { SnippetService } from './../services/snippet.service';
import { LabelService } from './../services/label.service';

import { SnippetsComponent } from './snippets/snippets.component';
import { SnippetFilterComponent } from './snippets/snippet-filter/snippet-filter.component';
import { SnippetLabelComponent } from './snippets/snippet-label/snippet-label.component';
import { SortAndListModule } from './snippets/contents/contents/sort-and-list/sort-and-list.module';
import { SearchAndDetailModule } from './snippets/contents/contents/search-and-detail/search-and-detail.module';

@NgModule({
  declarations: [
    SnippetsComponent,
    SnippetFilterComponent,
    SnippetLabelComponent
  ],
  exports: [
    SnippetsComponent,
    SnippetFilterComponent,
    SnippetLabelComponent
  ],
  imports: [
    CommonModule,
    SnippetsRoutingModule,
    SortAndListModule,
    SearchAndDetailModule,
    SharedModule
  ],
  providers: [
    SnippetService,
    LabelService
  ]
})
export class SnippetsModule { }
