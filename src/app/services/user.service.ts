import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  loginUser(user): Observable<Response> {
    return this.http.post<Response>(`${Hosts.API_HOST}/auth/login`, user);
  }
}
