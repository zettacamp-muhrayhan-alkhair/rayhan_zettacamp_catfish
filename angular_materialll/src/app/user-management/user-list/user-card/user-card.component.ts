import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserManagementService } from '../../user-management.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  usersData: User[] = [];

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.userManagementService.users$.subscribe((users) => {
      this.usersData = users;
    });
  }
}
