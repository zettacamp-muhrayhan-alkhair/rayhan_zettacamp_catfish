import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import Swal from 'sweetalert2';
import { openHistoryTransactionDialog } from './cart/history-transaction/history-transaction.component';

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
  public isToken: boolean = false;
  public isName = '';
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('role')) {
      if (JSON.parse(localStorage.getItem('role')) === 'Admin') {
        this.isToken = true;
        this.isAdmin = true;
      } else {
        this.isToken = true;
        this.isCustomer = true;
      }
    } else {
      this.isToken = false;
    }
  }

  setLanguage(event: any) {
    if (event.checked === true) {
      this.selectedLang = 'id';
    } else {
      this.selectedLang = 'en';
    }
    this.translateService.use(this.selectedLang);
  }

  onHistory() {
    openHistoryTransactionDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe(
        (data: any) => {
        },
        (err) => {
          Swal.fire({
            title: 'No History',
            text: err.message,
            icon: 'error',
          });
        }
      );
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['home']).then(() => {
      this.isAdmin = false;
      this.isCustomer = false;
    });
  }
}
