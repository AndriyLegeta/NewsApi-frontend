import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {Response} from "../models/Response";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogged = false;
  username: string;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  userData: {};

  ngOnInit() {
  }

  sendLoginUserData(username, password) {
    this.userData = {username, password};
    this.userService.loginUser(this.userData)
      .subscribe((response: Response) => {
        this.username = response.message});
    this.isLogged = true;
    this.router.navigate(['feeds']);
    localStorage.setItem('username', username);
  }
}
