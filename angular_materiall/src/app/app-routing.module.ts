import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-management/book-detail/book-detail.component';
import { BookListComponent } from './book-management/book-list/book-list.component';
import { BookManagementComponent } from './book-management/book-management/book-management.component';

const bookRoute: Routes = [
  {
    path: '',
    title: 'Home',
    component: BookManagementComponent,
  },
  {
    path: 'book-list',
    title: 'Book List',
    component: BookListComponent,
  },
  {
    path: 'book-details',
    title: 'Book Details',
    component: BookDetailComponent,
  },
  // {
  //   path: 'book-details/:id/:name/:author/:publisher/:publishDate/:img/:desc',
  //   title: 'Book Details',
  //   component: BookDetailComponent,
  // },
  {
    path: 'book-details/:id',
    title: 'Book Details',
    component: BookDetailComponent,
  },
  {
    path: '**',
    title: 'Home',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(bookRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
