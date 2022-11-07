import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  data = new BehaviorSubject<Table[]>([]);
  data$ = this.data.asObservable();
  constructor(private httpClient: HttpClient) {
    this.fetchData().subscribe((data) => this.data.next(data));
  }

  fetchData(): Observable<any> {
    return this.httpClient.get('../../../assets/data.dummy.json');
  }
}
