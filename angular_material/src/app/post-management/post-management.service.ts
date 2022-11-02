import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './model/post.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostManagementService {
  posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();
  constructor(private httpClient: HttpClient) {
    this.getPosts().subscribe((post) => {
      this.posts.next(post);
    });
  }

  getPosts(): Observable<any> {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  addPostToData(data: Post) {
    let newPost = this.getValuetAllPostsData();
    newPost.push(data);
    this.setAllPostsData(newPost);
  }

  getValuetAllPostsData(): Post[] {
    return this.posts.getValue();
  }

  setAllPostsData(data: Post[]) {
    this.posts.next(data);
  }

  createPost(postData: Post): any {
    this.httpClient
      .post('https://jsonplaceholder.typicode.com/posts', postData)
      .subscribe((newPost: any) => {
        this.addPostToData(newPost);
      });
  }

  deletePost(postId: any) {}

  updatePost(value: any, id: any) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'PATCH',
      body: JSON.stringify(value),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
