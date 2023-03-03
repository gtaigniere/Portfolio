import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SnippetComponent} from "./pages/snippet/snippet.component";
import {SnippetsResolver} from "./resolvers/snippets.resolver";
import {LabelsResolver} from "./resolvers/labels.resolver";
import {SnippetDetailComponent} from "./components/snippet-detail/snippet-detail.component";
import {AddSnippetComponent} from "./components/add-snippet/add-snippet.component";

const routes = [
  { path: '', component: SnippetComponent, children: [
    { path: 'detail', component: SnippetDetailComponent, outlet: 'right-side-snip' },
    { path: 'add', component: AddSnippetComponent, outlet: 'right-side-snip' }
  ],
  resolve: { snippets: SnippetsResolver, labels: LabelsResolver } }
];

const routes2 = [
  { path: '', component: SnippetComponent, children: [
    { path: '', component: SnippetDetailComponent, outlet: 'right-side-snip' },
    { path: 'add', component: AddSnippetComponent, outlet: 'right-side-snip' }
  ],
  resolve: { snippets: SnippetsResolver, labels: LabelsResolver } }
];

const routes3 = [
  { path: '', component: SnippetComponent, children: [
      { path: '', component: SnippetDetailComponent, outlet: 'right-side-snip' }
    ],
    resolve: { snippets: SnippetsResolver, labels: LabelsResolver } },
  { path: 'detail', component: SnippetComponent, children: [
      { path: 'detail', component: SnippetDetailComponent, outlet: 'right-side-snip' }
    ],
    resolve: { snippets: SnippetsResolver, labels: LabelsResolver } },
  { path: 'add', component: SnippetComponent, children: [
      { path: 'add', component: AddSnippetComponent, outlet: 'right-side-snip' }
    ],
    resolve: { snippets: SnippetsResolver, labels: LabelsResolver } }
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
    // RouterModule.forChild(routes2)
    // RouterModule.forChild(routes3)
  ]
})
export class SnippetRoutingModule {
}
