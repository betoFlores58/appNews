import { Component, OnInit } from '@angular/core';
import { NewResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];
  constructor(private newService: NewsService) {}

  ngOnInit(){
    this.newService.getTopHeadlines().subscribe(articles => this.articles.push(...articles));
  }
}
