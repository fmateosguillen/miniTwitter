import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Tweet} from '../dto/tweet';

let loggedUser= JSON.parse(localStorage.getItem('usuarioActual'));
let token= loggedUser.token;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer '+ token
  })
};

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http:HttpClient) { }

  like(id:number):Observable<Tweet>{
    const likeUrl = 'https://www.minitwitter.com:3001/apiv1/tweets/like/'+id;
    return this.http.post<Tweet>(
        likeUrl,
        null,
        httpOptions
    );
  }
}