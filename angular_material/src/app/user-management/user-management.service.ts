import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getData().subscribe((data) => {
      this.users.next(data);
    });
  }

  getData(): Observable<any> {
    return this.httpClient.get('../assets/users.json');
  }

  addUserToData(data: User) {
    let tempUsers = this.getValuetAllUsersDatas();
    tempUsers.push(data);
    this.setAllUsersDatas(tempUsers);
  }

  getValuetAllUsersDatas(): User[] {
    return this.users.getValue();
  }

  setAllUsersDatas(data: User[]) {
    this.users.next(data);
  }

  // editUser(val: any, content: any) {
  //   this.users[val] = content;
  //   this.users$.next(this.users);
  // }

  updateUser(user: any) {
    const users = this.users.getValue().map((userDatas) => {
      return userDatas._id === user._id ? user : userDatas;
    });
    this.users.next(users);
  }
}
