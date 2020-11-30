import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from 'src/app/dto/tweet';
import { AllTweetsService } from 'src/app/services/all.tweets.service';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  tweetsList: Tweet[];

  constructor(private tweetService: AllTweetsService, private route: ActivatedRoute, private router: Router, private likeService: LikeService) { }

  ngOnInit(): void {
    this.tweetsList = [];
    
  }

  showTweets(){
    this.tweetService.tweets().subscribe(respuesta => {
      respuesta.forEach(element =>{
        this.tweetsList.push(element);
      });
    });
  }

  doLike(id:number){
    this.likeService.like(id).subscribe(respuesta => {
      console.log(respuesta);
      alert("<3");
      this.router.navigate(["/inicio"]);
    })
  }

  goNewTweet(){
    this.router.navigate(["/newtweet"]);
  }

}
