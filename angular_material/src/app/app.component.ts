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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    let userData: any = localStorage.getItem('userData');
    userData = JSON.parse(userData);
    this.menus = userData.filter((val: any) => val.view === true);
    console.log(this.menus);
  }
}
