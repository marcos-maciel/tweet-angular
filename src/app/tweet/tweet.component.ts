
import { Component, Inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder } from '@angular/forms';
import { Tweet } from "../model/tweet";
import { TweetService } from "../service/tweetService";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

    private tweetService: TweetService;

    public categorias = [
        {
            id: 0,
            type: 'Esporte'
        },
        {
            id: 1,
            type: 'Moda'
        },
        {
            id: 2,
            type: 'Musica'
        }
    ];

    public listTweets: Tweet[] = [
        {
            id: 1,
            mensagem: "sdfs",
            categoria: ""
        },
        {
            id: 2,
            mensagem: "dfgasg",
            categoria: ""
        },
        {
            id: 3,
            mensagem: "sdfs",
            categoria: ""
        },
        {
            id: 4,
            mensagem: "dfgasg",
            categoria: "Moda"
        },
        {
            id: 5,
            mensagem: "sdfs",
            categoria: "Esporte"
        },
        {
            id: 6,
            mensagem: "dfgasg",
            categoria: "Musica"
        },
    ];
    public listTweetsApproved: Tweet[] = [];
    
    

    constructor(tweetService: TweetService) {
        this.tweetService = tweetService;
    }

    ngOnInit(): void {
        this.tweetService.list(
        ).subscribe({
            next: (response: Tweet[]) => {
                console.log(response);
                response.forEach(tweet => {
                    this.listTweets.push(tweet);

                })
            },
            error: (response: HttpErrorResponse) => {
                if (response.status === 500) {
                    console.log(response)
                } else {
                    console.log(response)
                }
            }
        });

        this.tweetService.listApproved(
        ).subscribe({
            next: (response: Tweet[]) => {
                console.log(response);
                response.forEach(tweet => {
                    this.listTweetsApproved.push(tweet);
                })
            },
            error: (response: HttpErrorResponse) => {
                if (response.status === 500) {
                    console.log(response)
                } else {
                    console.log(response)
                }
            }
        });
    }

    Aprove(tweet: Tweet) {
        this.tweetService.update(tweet.id, tweet);
    }
}
