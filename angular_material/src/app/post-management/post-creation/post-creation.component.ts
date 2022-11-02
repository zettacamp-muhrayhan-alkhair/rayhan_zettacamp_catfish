import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostManagementService } from '../post-management.service';

import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css'],
})
export class PostCreationComponent implements OnInit {
  postForm: any = new FormGroup({
    userId: new FormControl(null),
    id: new FormControl(null),
    title: new FormControl(null),
    body: new FormControl(null),
  });

  isEdit: boolean = false;
  id: any = this.activeRouter.snapshot.queryParamMap.get('id');

  constructor(
    private postManagementService: PostManagementService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isEdit = this.id != null;
    console.log(this.isEdit);

    // if (this.isEdit) {
    //   this.postManagementService.posts
    //     .pipe(first((posts) => posts.length !== 0))
    //     .subscribe((post) => {
    //       const posts = post.find((post) => post.id === id);
    //       this.setFormValues(posts);
    //     });
    // }
  }

  // setFormValues(post: any) {
  //   this.postForm.setValue(post);
  // }

  onSubmit(newPost: any) {
    if (this.isEdit) {
      this.postManagementService.updatePost(this.postForm.value, this.id);
    } else {
      this.postManagementService.createPost(this.postForm.value);
      // Make form null again
      this.postForm.reset();
    }

    // this.postManagementService.createPost(newPost);
    // this.postForm.reset();
  }
}
