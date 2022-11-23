import { Component, OnInit, Output } from '@angular/core';
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

  public isAdmin: boolean = false;
  public isCustomer: boolean = false;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    if (localStorage.getItem('role')) {
      if (JSON.parse(localStorage.getItem('role')) === 'Admin') {
        this.isAdmin = true;
        console.log(this.isAdmin);
      } else {
        this.isCustomer = true;
      }
    }

    // this.isNotApp = true;
    // if (localStorage.getItem('token')) {
    //   let data: any = localStorage.getItem('data');
    //   data = JSON.parse(data);
    //   this.dbMenus = data;
    //   this.isToken = true;
    //   this.appService.usertypes$
    //     .pipe(first((data) => data.length !== 0))
    //     .subscribe((data: any) => {
    //       const dummyMenus = data;
    //       this.newDummyMenus = this.dbMenus.reduce((acc: any, curr: any) => {
    //         const stored = dummyMenus.find(
    //           ({ name }: any) => name === curr.name
    //         );
    //         if (stored) {
    //           stored.view = curr.view;
    //           acc.push(stored);
    //         } else {
    //           acc.push(curr);
    //         }
    //         return acc;
    //       }, []);
    //       this.newDummyMenus = this.newDummyMenus.filter(
    //         (val: any) => val.view === true
    //       );
    //     });
    // } else {
    //   this.isToken = false;
    //   this.appService.usertypes$.subscribe((data) => {
    //     this.newDummyMenus = data.filter((val) => val.view === true);
    //   });
    // }
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['home']).then(() => {
      this.isAdmin = false;
      this.isCustomer = false;
    });
  }

  // onClick() {
  //   this.isNotApp = false;
  // }

  // onChange() {
  //   this.isNotApp = true;
  // }
}
