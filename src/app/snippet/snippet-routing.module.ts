import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SnippetComponent} from "./pages/snippet/snippet.component";
import {SnippetsResolver} from "./resolvers/snippets.resolver";
import {LabelsResolver} from "./resolvers/labels.resolver";
import {SnippetDetailComponent} from "./components/snippet-detail/snippet-detail.component";
import {AddSnippetComponent} from "./components/add-snippet/add-snippet.component";

const routes = [
  { path: '', component: SnippetComponent,
    children: [
      { path: '', component: SnippetDetailComponent, outlet: 'right-side-snip' }
    ],
    resolve: { snippets: SnippetsResolver, labels: LabelsResolver }
  },
  { path: 'add', component: SnippetComponent,
    children: [
      { path: '', component: AddSnippetComponent, outlet: 'right-side-snip' }
    ],
    resolve: { snippets: SnippetsResolver, labels: LabelsResolver }
  },
  { path: '**', redirectTo: '/home' }
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
export class SnippetRoutingModule {
}
