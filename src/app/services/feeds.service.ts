import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  feedUrl = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient) {}

    feedsApiUrl = 'feeds';

  getAllFeeds(): Observable<Response> {
    const username = localStorage.getItem('username');
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.feedsApiUrl}/${username}`);
  }

  addNewFeed(newTitle, newLink): Observable<Response> {
    let username = localStorage.getItem('username');
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.feedsApiUrl}/add`, {
      username: username,
      title: newTitle,
      link: newLink
    });
  }

  deleteFeed(title): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('username'));
    return this.http.delete<Response>(`${Hosts.API_HOST}/${this.feedsApiUrl}/delete/${title}`, {headers});
  }

}

