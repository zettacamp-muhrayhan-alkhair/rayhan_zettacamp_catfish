import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_material';
  // selectedStudent:
  constructor(private data: DataService) {}

  students: {}[] = [];
  ngOnInit(): void {
    this.students = this.data.students;
    // this.data.selectedStudent$.subscribe((student) => {
    //   this.selectedStudent = student;
    // });
  }
}
