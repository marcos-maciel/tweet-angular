import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tweet } from "../model/tweet";

@Injectable()
export class TweetService {

    private httpClient: HttpClient;
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers':
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        })
    };

    public constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }


    public list(): Observable<Tweet[]> {
        let url = `localhost:8040/tweets`;
        return this.httpClient.get<Tweet[]>(url, this.httpOptions);
    }

    public listApproved(): Observable<Tweet[]> {
        let url = `localhost:8040/tweets/aprovados`;
        return this.httpClient.get<Tweet[]>(url, this.httpOptions);
    }

    public find(id: number): Observable<Tweet> {
        return this.httpClient.get<Tweet>(`localhost:8040/tweet/${id}`);
    }

    public create(tweet: Tweet, referCode?: string): Observable<Tweet> {
        let url = `localhost:8040/tweet`;
        if (referCode) url += `/?ref=${referCode}`;

        return this.httpClient.post<Tweet>(url, tweet)
    }

    public update(id: number, tweet: Tweet): Observable<HttpResponseBase> {
        return this.httpClient.put(`localhost:8040/tweet/${id}`, tweet, { observe: "response" });
    }

    public delete(id: number): Observable<HttpResponseBase> {
        return this.httpClient.delete(`localhost:8040/tweet/${id}`, { observe: "response" });
    }

}