import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortAndListComponent } from './sort-and-list/sort-and-list.component';
import { SnippetSortComponent } from './sort-and-list/snippet-sort/snippet-sort.component';
import { SnippetListComponent } from './sort-and-list/snippet-list/snippet-list.component';
import { SnippetCardComponent } from './sort-and-list/snippet-list/snippet-card/snippet-card.component';

@NgModule({
  declarations: [
    SortAndListComponent,
    SnippetSortComponent,
    SnippetListComponent,
    SnippetCardComponent
  ],
  exports: [
    SortAndListComponent,
    SnippetSortComponent,
    SnippetListComponent,
    SnippetCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SortAndListModule { }
