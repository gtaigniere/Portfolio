import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {PartialsModule} from './partials/partials.module';

import {SharedModule} from './shared/shared.module';
import {WelcomeModule} from './welcome/welcome.module';
import {CreationModule} from './creation/creation.module';
import {SnippetModule} from './snippet/snippet.module';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    PartialsModule,
    WelcomeModule,
    CreationModule,
    SnippetModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
