import { HttpClient } from '@angular/common/http';
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

  // deletePost(postId: any) {
  //   // this.httpClient
  //   //   .delete('https://jsonplaceholder.typicode.com/posts/' + postId)
  //   //   .subscribe((post: any) => {});
  // }

  updatePost(post: any) {
    const posts = this.posts.getValue().map((postData) => {
      return postData.id === post.id ? post : postData;
    });
    this.posts.next(posts);
  }



  // newwwww

  getPostById(id: number) {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  patchPost(id: any, data: any) {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this.httpClient.patch<Post>(url, data);
  }

  deletePost(id: number){
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this.httpClient.delete<any>(url);
    
}
}
