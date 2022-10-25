import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Book } from './type/book.type';

@Injectable({
  providedIn: 'root',
})
export class BookManagementService {
  // books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  books = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();

  // selectedBook: BehaviorSubject<Book | null> = new BehaviorSubject<Book | null>(
  selectedBook = new BehaviorSubject<Book | null>(null);
  selectedBooks$ = this.selectedBook.asObservable();

  constructor(private httpClient: HttpClient) {
    this.dummyInitData();
  }

  fetchBookJson() {
    return this.httpClient.get<any>('../../assets/books.json');
  }

  setAllBooksDatas(data: Book[]) {
    this.books.next(data);
  }

  dummyInitData() {
    this.fetchBookJson().subscribe((data) => {
      let booksData = data.books;
      this.setAllBooksDatas(booksData);
    });
  }

  getValuetAllBooksDatas(): Book[] {
    return this.books.getValue();
  }

  setSelectedBook(data: Book) {
    this.selectedBook.next(data);
  }

  resetSelectedBOok() {
    this.selectedBook.next(null);
  }

  // addBookToData(data: Book) {
  //   let tempBooks = this.getValuetAllBooksDatas();
  //   tempBooks.push(data);
  //   this.setAllBooksDatas(tempBooks);
  // }

  // resetAllBooksDatas() {
  //   this.books.next([]);
  // }
}
