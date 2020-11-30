import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { crearTweet } from 'src/app/dto/crearTweet';
import { AllTweetsService } from 'src/app/services/all.tweets.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent implements OnInit {

  newTweet: crearTweet;

  constructor(private tweetService: AllTweetsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.newTweet = new crearTweet("");
  }

  createTweet(){
    this.tweetService.createTweet(this.newTweet).subscribe(resp => {
      this.router.navigate(["/inicio"]);
    });
  }

  backTweets(){
    this.router.navigate(["/inicio"]);
  }

}
