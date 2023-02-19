import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {environment} from "../environments/environment";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {PartialsModule} from './partials/partials.module';
import {SharedModule} from './shared/shared.module';

import {WelcomeModule} from './welcome/welcome.module';
import {PortfolioModule} from './portfolio/portfolio.module';
import {SnippetModule} from './snippet/snippet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    PartialsModule,
    WelcomeModule,
    PortfolioModule,
    SnippetModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
