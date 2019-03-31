import {Component, OnInit} from '@angular/core';
import {NewsService} from '../services/news.service';
import {FeedsService} from "../services/feeds.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any = [];

  constructor(
  private newsService: NewsService,
  private feedsService: FeedsService,
  private location: Location
  ) {
  }

  ngOnInit() {
    let feedUrl = this.feedsService.feedUrl;
    this.newsService.getNews(feedUrl).subscribe(news => {
      console.log(news.message);
      this.news = news.message;
    })
  }
  back(){
    this.location.back();
  }

}
