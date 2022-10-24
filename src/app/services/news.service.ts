import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article, NewResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  /*private executeQuery<T>(endpoint: string){
    return this.http.get<T>(`${apiUrl}${endpoint}`,{
      params:{
        apikey: this.apiKey,
        country: 'us'
      }
    });
  }*/
  private articlesByCategory = {
    bussiness: {
      page: 0,
      atricles: [],
    },
    bussiness: {
      page: 0,
      atricles: [],
    },
  };

  getTopHeadlines(): Observable<Article[]> {
    return this.http
      .get<NewResponse>(
        `https://newsapi.org/v2/top-headlines?country=us&category=business`,
        {
          params: {
            apiKey: this.apiKey,
          },
        }
      )
      .pipe(map(({ articles }) => articles));
  }

  getTopHeadlinesByCategory(cat: string): Observable<Article[]> {
    return this.http
      .get<NewResponse>(
        `https://newsapi.org/v2/top-headlines?country=us&category=${cat}`,
        {
          params: {
            apiKey: this.apiKey,
          },
        }
      )
      .pipe(map(({ articles }) => articles));
  }
}
