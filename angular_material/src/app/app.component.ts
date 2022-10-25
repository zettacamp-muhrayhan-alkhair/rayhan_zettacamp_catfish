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

  students: any = [];
  ngOnInit(): void {
    this.data.students.subscribe((student) => {
      this.students = student;
      console.log(this.students);
    });
  }
}
