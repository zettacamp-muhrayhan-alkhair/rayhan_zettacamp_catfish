import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserManagementService } from '../user-management.service';
import { SubSink } from 'subsink/dist/subsink';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private subs = new SubSink();
  users: User[] = [];

  searchName = new FormControl('');
  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.searchName.valueChanges.subscribe((search: any) => {
      if (search.length > 3) {
        this.subs.sink = this.userManagementService
          .getUsers(search)
          .subscribe((resp: any) => {
            this.users = resp.data.GetAllUsers;
          });
      } else {
        this.users = [];
      }
    });
  }

  // onClick() {
  //   this.searchName.valueChanges.subscribe((search: any) => {
  //     if (search.length < 3) {
  //       this.subs.sink = this.userManagementService
  //         .getUsers(search)
  //         .subscribe((resp: any) => {
  //           this.users = resp.data.GetAllUsers;
  //         });
  //     } else {
  //       this.users = [];
  //     }
  //   });
  // }
}
