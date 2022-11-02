import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostManagementService } from '../post-management.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css'],
})
export class PostCreationComponent implements OnInit {
  postForm = new FormGroup({
    userId: new FormControl(null),
    title: new FormControl(null),
    body: new FormControl(null),
  });
  constructor(private postManagementService: PostManagementService) {}

  ngOnInit(): void {}

  onCreatePost(newPost: any) {
    this.postManagementService.createPost(newPost);
  }
}
