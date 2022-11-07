import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();
  constructor(private httpClient: HttpClient) {
    this.fetchUsersData().subscribe((data) => this.users.next(data));
  }

  fetchUsersData() {
    return this.httpClient.get<any>('../../../assets/users.json');
  }

  addUserToData(data: User) {
    let tempUsers = this.getValuetAllUsersData();
    tempUsers.push(data);
    this.setAllUsersData(tempUsers);
  }

  getValuetAllUsersData(): User[] {
    return this.users.getValue();
  }

  setAllUsersData(data: User[]) {
    this.users.next(data);
  }
}
