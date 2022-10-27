import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserManagementService } from '../../user-management.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  // usersData: any;
  @Input() user: any;

  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.userManagementService.users$.subscribe((users) => {
  //     this.usersData = users;
  //   });
  // }
  ngOnInit(): void {}

  onEditUser() {
    this.router.navigate(['/user-form'], {
      queryParams: { userId: this.user._id },
    });
  }
}
