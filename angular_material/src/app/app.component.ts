import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_material';
  menus: any = [];
  isToken: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (localStorage.getItem('userToken') !== null) {
      this.isToken = true;
      let userData: any = localStorage.getItem('userData');
      userData = JSON.parse(userData);
      this.menus = userData.filter((val: any) => val.view === true);
    } else {
      this.isToken = false;
    }
  }
}
