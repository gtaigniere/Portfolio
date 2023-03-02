import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SnippetComponent} from "./pages/snippet/snippet.component";
import {SnippetsResolver} from "./resolvers/snippets.resolver";
import {LabelsResolver} from "./resolvers/labels.resolver";

const routes = [
  { path: '', component: SnippetComponent, resolve: { snippets: SnippetsResolver, labels: LabelsResolver } }
];

@NgModule({
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SnippetRoutingModule { }
