import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Book } from './typeOf/book.type';

@Injectable({
  providedIn: 'root',
})
export class BookManagementService {
  books = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();

  selectedBook = new BehaviorSubject<Book | null>(null);
  selectedBooks$ = this.selectedBook.asObservable();

  constructor(private httpClient: HttpClient) {
    this.booksInitData();
  }

  fetchBookDatas() {
    return this.httpClient.get<any>('../../assets/books.json');
  }

  setAllBooksDatas(data: Book[]) {
    this.books.next(data);
  }

  booksInitData() {
    this.fetchBookDatas().subscribe((data) => {
      let booksData = data.books;
      this.setAllBooksDatas(data);
    });
  }

  getValueAllBooksDatas(): Book[] {
    return this.books.getValue();
  }

  setSelectedBook(data: Book) {
    this.selectedBook.next(data);
  }

  resetSelectedBook(): any {
    this.selectedBook.next(null);
  }
}
