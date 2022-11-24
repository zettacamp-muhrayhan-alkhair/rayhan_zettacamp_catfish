import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  selectedLang: any;

  public isAdmin: boolean = false;
  public isCustomer: boolean = false;

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('role')) {
      if (JSON.parse(localStorage.getItem('role')) === 'Admin') {
        this.isAdmin = true;
      } else {
        this.isCustomer = true;
      }
    }
  }

  setLanguage(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['home']).then(() => {
      this.isAdmin = false;
      this.isCustomer = false;
    });
  }
}
