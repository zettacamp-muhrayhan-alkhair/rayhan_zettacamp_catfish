import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css'],
})
export class BookManagementComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSeeList() {
    this.router.navigate(['/book-list']);
  }
}
