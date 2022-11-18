import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

 
}
