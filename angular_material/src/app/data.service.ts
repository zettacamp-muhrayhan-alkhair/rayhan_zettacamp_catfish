import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from './students.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  students: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  // students$ = this.students.asObservable();
  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe(data => {
      this.students.next(data);
    });
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('../../assets/students.json');
  }
}
