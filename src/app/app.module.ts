import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PartialsModule } from './partials/partials.module';
import { SharedModule } from './shared/shared.module';

import { WelcomeModule } from './welcome/welcome.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SnippetsModule } from './snippets/snippets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PartialsModule,
    WelcomeModule,
    PortfolioModule,
    SnippetsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
