import { Component, OnInit } from '@angular/core';
import { Book } from '../type/book.type';
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
    // Observe to selecteduser behaviourSubject, if there is change, then it will update selectedUser
    this.bookManagementService.selectedBooks$.subscribe((book) => {
      this.selectedBook = book;
    });
  }
  closeDetail() {
    this.bookManagementService.resetSelectedBOok();
  }
}
