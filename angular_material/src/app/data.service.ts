import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from './students.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  students: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  students$ = this.students.asObservable();

  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe((data) => {
      this.students.next(data.students);
      // console.log(this.students);
    });
  }

  fetchData(): Observable<any> {
    return this.httpClient.get<any>('../assets/students.json');
  }
}
