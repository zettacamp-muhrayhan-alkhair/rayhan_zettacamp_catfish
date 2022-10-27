import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  users = new BehaviorSubject<any>([]);
  users$ = this.users.asObservable();
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  initData() {
    this.getData().subscribe((data) => {
      let usersData = data;
      this.users.next(usersData);
    });
  }

  getData(): Observable<any> {
    return this.httpClient.get<any>('../assets/users.json');
  }
}
