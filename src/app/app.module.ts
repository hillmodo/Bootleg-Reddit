import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RedditCallService } from './reddit-call.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubredditComponent } from './subreddit/subreddit.component';

@NgModule({
  declarations: [
    AppComponent,
    SubredditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
    providers: [RedditCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
