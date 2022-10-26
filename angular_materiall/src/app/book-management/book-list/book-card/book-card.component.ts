import { Component, OnInit } from '@angular/core';
import { Book } from '../../typeOf/book.type';
import { BookManagementService } from '../../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  booksData: Book[] = [];
  selectedBook: Book | null = null;
  selected: boolean = false;

  constructor(private bookManagementService: BookManagementService) {}

  ngOnInit(): void {
    this.bookManagementService.books$.subscribe((datas) => {
      this.booksData = datas;
    });

    this.bookManagementService.selectedBooks$.subscribe((data) => {
      this.selectedBook = data;
      if (this.selectedBook) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    });
  }

  selectBook(book: Book) {
    if (this.selected) {
      this.bookManagementService.resetSelectedBook();
    } else {
      this.bookManagementService.setSelectedBook(book);
    }
  }
}
