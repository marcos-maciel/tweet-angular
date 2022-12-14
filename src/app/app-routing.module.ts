import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { TweetComponent } from "./tweet/tweet.component"

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "tweets", component: TweetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
