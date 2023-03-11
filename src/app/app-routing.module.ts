import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule) },
  { path: 'creations', loadChildren: () => import('./creation/creation.module').then(module => module.CreationModule) },
  { path: 'snippets', loadChildren: () => import('./snippet/snippet.module').then(module => module.SnippetModule) },
  { path: '', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule) },
  { path: '**', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
