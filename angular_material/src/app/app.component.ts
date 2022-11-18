import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat, first } from 'rxjs';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { usertype } from './model/usertype.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_material';
  dbMenus: any = [];
  isToken: boolean = false;
  newDummyMenus: any = [];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    let userData: any = localStorage.getItem('userData');
    userData = JSON.parse(userData);
    this.dbMenus = userData;
    if (localStorage.getItem('userToken')) {
      this.isToken = true;
      this.appService.usertypes$
        .pipe(first((data) => data.length !== 0))
        .subscribe((data: any) => {
          const dummyMenus = data;
          this.newDummyMenus = this.dbMenus.reduce((acc: any, curr: any) => {
            const stored = dummyMenus.find(
              ({ name }: any) => name === curr.name
            );
            if (stored) {
              stored.view = curr.view;
              acc.push(stored);
            } else {
              acc.push(curr);
            }
            return acc;
          }, []);
          this.newDummyMenus = this.newDummyMenus.filter(
            (val: any) => val.view === true
          );
        });
    } else {
      this.isToken = false;
      this.appService.usertypes$.subscribe((data) => {
        this.newDummyMenus = data.filter((val) => val.view === true);
      });
    }
    // if (localStorage.getItem('userToken') !== null) {
    //   this.isToken = true;
    //   let userData: any = localStorage.getItem('userData');
    //   userData = JSON.parse(userData);
    //   this.dbMenus = userData.filter((val: any) => val.view === true);
    // } else {
    //   this.isToken = false;
    // }
  }

  onLogout() {
    localStorage.clear();
  }
}
