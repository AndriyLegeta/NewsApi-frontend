import {Component, OnInit} from '@angular/core';
import {Response} from './models/Response';
import {UserService} from './services/user.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  userData: {};

  ngOnInit() {

  }

  sendLoginUserData(username, password) {
    this.userData = {
      username,
      password
    };

    this.userService.loginUser(this.userData)
      .subscribe((response: Response) => {

          localStorage.setItem('username', response.message);
      });
    this.isLogged = true;
    this.router.navigate(['feeds']);
  }



  sighOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['']);
    this.isLogged = false;
  }

}
