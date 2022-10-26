import { Component, OnInit } from '@angular/core';
import { Book } from '../type/book.type';
import { BookManagementService } from '../book-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  selectedBook: Book | null = null;
  bookId: any;

  constructor(
    private bookManagementService: BookManagementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Observe to selecteduser behaviourSubject, if there is change, then it will update selectedUser
    // this.bookId = this.route.snapshot.params['id'];
    // this.bookManagementService.addDetail(this.bookId);
    // this.bookManagementService.selectedBooks$.subscribe((book) => {
    //   this.selectedBook = book;
      // this.selectedBook = {
      //   id: this.route.snapshot.params['id'],
      //   name: this.route.snapshot.params['name'],
      //   author: this.route.snapshot.params['author'],
      //   publisher: this.route.snapshot.params['publisher'],
      //   publishDate: this.route.snapshot.params['publishDate'],
      //   img: this.route.snapshot.params['img'],
      //   desc: this.route.snapshot.params['desc'],
      // };

      this.route.paramMap.subscribe((params) => {
        const id = parseInt(params.get('id')!, 10);
        this.selectedBook = this.bookManagementService.getBookById(id);
      });
    // });
  }
  // closeDetail() {
  //   this.bookManagementService.resetSelectedBook();
  // }
}
