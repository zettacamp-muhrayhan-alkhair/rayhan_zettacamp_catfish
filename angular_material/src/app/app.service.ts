import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usertype } from './model/usertype.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  usertypes = new BehaviorSubject<usertype[]>([]);
  usertypes$ = this.usertypes.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getAllUserTypes().subscribe((data: any) => this.usertypes.next(data));
  }

  getAllUserTypes() {
    return this.httpClient.get('../assets/dummy/usertype.dummy.json');
  }
}
