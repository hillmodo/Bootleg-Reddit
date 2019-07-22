import { Component, OnInit } from '@angular/core';
import { RedditCallService } from '../reddit-call.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {

  sub: string;
  post: any;
  link: any;

  constructor(private redditCallService: RedditCallService) { }

  returnSubreddit(sub) {
    this.redditCallService.getReddit(this.sub).subscribe((e : any) => {
      this.post = e.data.children;
    })
  }
  ngOnInit() {
  }

}
