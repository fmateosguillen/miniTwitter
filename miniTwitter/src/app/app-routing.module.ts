import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NewTweetComponent } from './Components/new-tweet/new-tweet.component';
import { RegisterComponent } from './Components/register/register.component';
import { TweetsComponent } from './Components/tweets/tweets.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full"},
  { path: "inicio", component: TweetsComponent, pathMatch: "full"},
  { path: "newtweet", component: NewTweetComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
