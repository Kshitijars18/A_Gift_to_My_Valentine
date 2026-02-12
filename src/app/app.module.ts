import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // make sure this is imported

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { Question1Component } from './question1/question1.component';
import { AreYouReadyComponent } from './are-you-ready/are-you-ready.component';
import { Question2Component } from './question2/question2.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    Question1Component,
    AreYouReadyComponent,
    Question2Component,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
