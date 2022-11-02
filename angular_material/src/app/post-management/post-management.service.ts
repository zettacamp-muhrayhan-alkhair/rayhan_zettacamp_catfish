import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostManagementService {
  posts: any;

  constructor(private httpClient: HttpClient) {}

  getDatas(): any {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((datas) => {
        this.posts = datas;
      });

    return this.posts;
  }
}
