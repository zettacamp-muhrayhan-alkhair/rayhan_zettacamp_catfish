import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SubSink } from 'subsink/dist/subsink';
import { SchoolManagementService } from '../school-management.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-school-table',
  templateUrl: './school-table.component.html',
  styleUrls: ['./school-table.component.css'],
})
export class SchoolTableComponent implements OnInit {
  displayedColumns: string[] = ['long_name', 'short_name', 'status'];

  private subs = new SubSink();
  schools: School[] = [];
  dataSource = new MatTableDataSource();
  constructor(private schoolManagementService: SchoolManagementService) {}

  ngOnInit(): void {
    this.subs.sink = this.schoolManagementService
      .getSchools()
      .subscribe((school: any) => {
        this.schools.push(school.data.GetAllSchools);
        this.dataSource = new MatTableDataSource(school.data.GetAllSchools);
      });
  }
}
