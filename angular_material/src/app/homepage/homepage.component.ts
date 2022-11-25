import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  isToken: any;
  constructor(private router: Router, private appComponenet: AppComponent) {}

  ngOnInit(): void {
    // this.isToken = this.appComponenet.isToken;
    this.isToken = localStorage.getItem('token');
  }

  onMenu() {
    this.router.navigate(['menu']);
  }

  onOrder() {
    if (this.isToken) {
      if (this.isToken === null) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['cart']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
