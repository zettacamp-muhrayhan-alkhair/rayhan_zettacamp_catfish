import { Component, OnInit } from '@angular/core';
import { Book } from '../typeOf/book.type';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  selectedBook: Book | null = null;
  constructor(private bookManagementService: BookManagementService) {}

  ngOnInit(): void {
    this.bookManagementService.selectedBooks$.subscribe((data) => {
      this.selectedBook = data;
    });
  }

  onClose() {
    this.bookManagementService.resetSelectedBook();
  }
}
