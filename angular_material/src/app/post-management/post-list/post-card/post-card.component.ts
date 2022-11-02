import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostManagementService } from '../../post-management.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() post: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postManagementService: PostManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.queryParamMap.get('id');
  }

  onEditPost() {
    this.router.navigate(['/post-form'], {
      queryParams: { id: this.post.id },
    });
  }

  // onDeletePost() {
  //   // queryParams: { id: this.post.id }
  //   // this.postManagementService.deletePost(this.id);
  // }

  //

  onDeletePost() {
    this.postManagementService.deletePost(this.post.id).subscribe(() => {});
  }
}
