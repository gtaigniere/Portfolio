import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SnippetRoutingModule} from './snippet-routing.module';
import {SharedModule} from '../shared/shared.module';

import {SnippetService} from './services/snippet.service';
import {LabelService} from './services/label.service';

import {SnippetFilterComponent} from './components/snippet-filter/snippet-filter.component';
import {SnippetSort} from './components/snippet-sort/snippet-sort.component';
import {SnippetListComponent} from './components/snippet-list/snippet-list.component';
import {SnippetSearchComponent} from './components/snippet-search/snippet-search.component';
import {SnippetDetailComponent} from './components/snippet-detail/snippet-detail.component';
import {SnippetCardComponent} from './components/snippet-card/snippet-card.component';
import {SnippetLabelComponent} from './components/snippet-label/snippet-label.component';
import {SnippetComponent} from "./pages/snippet/snippet.component";
import {SnippetsResolver} from "./resolvers/snippets.resolver";
import {LabelsResolver} from "./resolvers/labels.resolver";

@NgModule({
  declarations: [
    SnippetFilterComponent,
    SnippetSort,
    SnippetListComponent,
    SnippetSearchComponent,
    SnippetDetailComponent,
    SnippetCardComponent,
    SnippetLabelComponent,
    SnippetComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SnippetRoutingModule,
    SharedModule
  ],
  providers: [
    SnippetService,
    LabelService,
    SnippetsResolver,
    LabelsResolver
  ]
})
export class SnippetModule { }
