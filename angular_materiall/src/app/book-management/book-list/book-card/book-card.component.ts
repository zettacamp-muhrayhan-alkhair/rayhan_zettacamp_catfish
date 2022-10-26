import { Component, OnInit } from '@angular/core';
import { Book } from '../../type/book.type';
import { BookManagementService } from '../../book-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  booksData: Book[] = [];
  selectedBook: Book | null = null;
  selected: boolean = false;

  constructor(
    private bookManagementService: BookManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Observe to books behaviourSubject, if there is changes, then it will update booksData also
    this.bookManagementService.books$.subscribe((books) => {
      this.booksData = books;
    });

    this.bookManagementService.selectedBooks$.subscribe((data) => {
      this.selectedBook = data;
      if (this.selectedBook) {
        this.selected = true;
      } else {
        this.selected = false;
      }
      console.log(this.selected);
    });
  }

  selectBook(book: Book) {
    // if (this.selected) {
    //   this.bookManagementService.resetSelectedBook();
    // } else {
    //   this.bookManagementService.setSelectedBook(book);
    this.router.navigate(['book-details/' + book.id]);

    // this.selected = false;
  }
}
// }
