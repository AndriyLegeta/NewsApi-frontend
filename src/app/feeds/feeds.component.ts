import {Component, OnInit} from '@angular/core';
import {FeedsService} from '../services/feeds.service';
import {Feed} from '../models/Feed';
import {Response} from '../models/Response';
import {Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-employees',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  isAdded: boolean = false;
  constructor(
    private feedsService: FeedsService,
    private router: Router,
    private location: Location
  ) {
  }

  feeds: Feed[];

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds(){
     this.feedsService.getAllFeeds()
      .subscribe((response: Response) => {
        console.log(response.message);
          if (response.success) {
           this.feeds = response.message;
        }
      });
  }

  getFeedLink(link){
    this.feedsService.feedUrl.next(link);
    this.router.navigate(['news'])
  }

  back(){
    this.location.back();
    localStorage.removeItem('username');
  }

  check(){
     this.isAdded = !this.isAdded;
  }

  registerNewFeed(title, link){
    this.feedsService.addNewFeed(title, link)
      .subscribe((response: Response) => {
        if (response.success) {
          this.feeds = response.message;
        }
      });
    this.isAdded = !this.isAdded;
  }

  deleteFeed(feed){
    this.feedsService.deleteFeed(feed.title).subscribe((response: Response) => {
        if (response.success) {
          console.log(response.message);
          this.feeds = this.feeds.filter(e => e !== feed);
        }
      });
  }
}
