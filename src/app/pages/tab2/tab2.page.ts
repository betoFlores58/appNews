import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  public categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  public selectedCat = this.categories[5];
  public articles: Article[] = [];
  constructor(private newsService: NewsService) {}

  segmentChanged(event: any) {
    this.selectedCat = event.detail.value;
    this.newsService
      .getTopHeadlinesByCategory(this.selectedCat)
      .subscribe((articles) => {
        this.articles = [...this.articles,...articles];
      });
  }

  ngOnInit(): void {
    this.newsService.getTopHeadlinesByCategory(this.selectedCat)
      .subscribe(articles => {
        this.articles = [...this.articles, ...articles];
      });
  }
}
