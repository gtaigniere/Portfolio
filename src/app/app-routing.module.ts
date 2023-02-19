import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'snippets', loadChildren: () => import('./snippet/snippet.module').then(module => module.SnippetModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(module => module.PortfolioModule) },
  { path: 'accueil', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule) },
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
