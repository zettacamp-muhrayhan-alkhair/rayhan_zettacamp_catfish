import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostManagementComponent } from './post-management/post-management.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';

// Module
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostManagementComponent,
    PostListComponent,
    PostCreationComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PostManagementComponent,
    PostListComponent,
    PostCreationComponent,
    PostCardComponent,
  ],
})
export class PostManagementModule {}
