import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule)},
  {path: 'creations', loadChildren: () => import('./creation/creation.module').then(module => module.CreationModule)},
  {path: 'snippets', loadChildren: () => import('./snippet/snippet.module').then(module => module.SnippetModule)},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
