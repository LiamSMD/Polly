import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { ManageVoteComponent } from './manage-vote/manage-vote.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    NavigationComponent,
    VoteComponent,
    ManageVoteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild([
      { path: 'results', component: ResultsComponent },
      { path: 'vote/:id', component: VoteComponent },
      { path: 'manage-vote', component: ManageVoteComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
