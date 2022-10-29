import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchAndDetailComponent } from './search-and-detail/search-and-detail.component';
import { SnippetSearchComponent } from './search-and-detail/snippet-search/snippet-search.component';
import { SnippetDetailComponent } from './search-and-detail/snippet-detail/snippet-detail.component';

@NgModule({
  declarations: [
    SearchAndDetailComponent,
    SnippetSearchComponent,
    SnippetDetailComponent
  ],
  exports: [
    SearchAndDetailComponent,
    SnippetSearchComponent,
    SnippetDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchAndDetailModule { }
