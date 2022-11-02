import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './model/post.model';
import { BehaviorSubject } from 'rxjs';

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

  getPosts() {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  addPostToData(data: Post) {
    let tempPosts = this.getValuetAllPostsData();
    tempPosts.push(data);
    this.setAllPostsData(tempPosts);
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

  deletePost() {
    this.httpClient
      .delete('https://jsonplaceholder.typicode.com/posts')
      .subscribe((post: any) => {
        console.log(post);
      });
  }
}
