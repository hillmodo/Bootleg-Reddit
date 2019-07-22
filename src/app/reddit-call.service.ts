import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditCallService {

  constructor(private httpClient: HttpClient) {
  }
  getReddit(sub){
    return this.httpClient.get(` https://www.reddit.com/r/${sub}/.json`)
  };
}
