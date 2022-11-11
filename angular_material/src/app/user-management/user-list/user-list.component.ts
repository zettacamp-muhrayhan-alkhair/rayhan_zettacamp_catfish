import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userManagementService.users$.subscribe((data) => {
      this.users = data;
      console.log(this.users);
      console.log(data);
    });
  }

  onAddUser() {
    this.router.navigate(['user-form']);
  }
}
