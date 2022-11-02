import { Component, OnInit } from '@angular/core';
import { PostManagementService } from '../post-management.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: any = [];
  constructor(private postManagementService: PostManagementService) {}

  ngOnInit(): void {}

  getPosts() {
    this.posts = this.postManagementService.posts;
    console.log(this.postManagementService.getDatas());
  }
}
