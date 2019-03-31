import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) {
  }

  newsApiUrl = 'news';

  getNews(feedUrl): Observable<Response> {
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.newsApiUrl}`, {feedUrl: feedUrl} );
  }


}
