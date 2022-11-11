import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  private readonly URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
    this.getUser().subscribe((data) => this.users.next(data));
  }

  getUser() {
    const url = this.URL + 'users';
    return this.httpClient.get<User[]>(url);
  }

  getUserById(id: number) {
    const url = this.URL + 'users/' + id;
    return this.httpClient.get<User[]>(url);
  }

  addUser(data: any) {
    const url = this.URL + 'users';
    return this.httpClient
      .post<User[]>(url, data)
      .subscribe((data: any) => this.addUserToData(data));
  }

  addUserToData(data: User) {
    let allUser = this.getValuetAllUsersData();
    allUser.push(data);
    this.setAllUsersData(allUser);
  }

  getValuetAllUsersData(): User[] {
    return this.users.getValue();
  }

  setAllUsersData(data: User[]) {
    this.users.next(data);
  }
}
