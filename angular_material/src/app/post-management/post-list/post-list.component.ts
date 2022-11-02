import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { PostManagementService } from '../post-management.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postManagementService: PostManagementService) {}

  ngOnInit(): void {
    this.postManagementService.posts$.subscribe((post) => {
      this.posts = post;
    });
  }

  onAddPost() {}
}
