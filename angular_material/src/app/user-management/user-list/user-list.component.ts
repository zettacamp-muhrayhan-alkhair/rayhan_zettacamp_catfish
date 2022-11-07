import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { User } from '../model/user.model';
import { openAddUserDialog } from '../user-form/user-form.component';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userManagementService: UserManagementService,
    private matDialog: MatDialog,
    private translateService: TranslateService
  ) {}

  selectedLang: any = null;

  ngOnInit(): void {
    this.userManagementService.users$.subscribe((data) => {
      this.users = data;
    });
  }

  addUser() {
    openAddUserDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => this.userManagementService.addUserToData(val));
    console.log(this.users);
  }

  setLanguage(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang);
  }
}
