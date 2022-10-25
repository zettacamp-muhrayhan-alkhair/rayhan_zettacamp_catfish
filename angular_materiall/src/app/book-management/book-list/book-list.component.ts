import { Component, OnInit } from '@angular/core';
import { Book } from '../type/book.type';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  selectedBook: Book | null = null;
  constructor(private bookManagementService: BookManagementService) {}

  ngOnInit(): void {
    this.bookManagementService.selectedBooks$.subscribe((book) => {
      this.selectedBook = book;
    });
  }
}
