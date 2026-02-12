import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { Question1Component } from './question1/question1.component';
import { AreYouReadyComponent } from './are-you-ready/are-you-ready.component';
import { Question2Component } from './question2/question2.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: MusicComponent },        // default route
  { path: 'question1', component: Question1Component }, // second page
  { path: 'app-are-you-ready', component: AreYouReadyComponent }, // second page
  { path: 'app-question2', component: Question2Component }, // second page
  { path: 'app-thankyou', component: ThankyouComponent }, // second page
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
