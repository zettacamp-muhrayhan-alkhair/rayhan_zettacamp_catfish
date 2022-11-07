import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table.model';
import { MatTableDataSource } from '@angular/material/table';

import { FormControl } from '@angular/forms';
import { TableService } from '../services/table.service';
import { Dropdown } from '../models/dropdown.model';
import { Drop } from '../models/drop.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'user_type', 'email', 'status'];
  data: Table[] = [];
  dataSource = new MatTableDataSource(this.data);

  nameFilter = new FormControl();
  userTypeFilter = new FormControl();
  emailFilter = new FormControl();

  filteredValue = { name: '', user_type: '', email: '' };

  availableSources: Dropdown[] = Drop;

  sourceFilter = new FormControl('');

  filterValues: any = {
    status: '',
  };
  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.data$.subscribe((data) => {
      this.data = data;
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);

      this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
        this.filteredValue['name'] = nameFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValue);
      });

      this.userTypeFilter.valueChanges.subscribe((userTypeFilterValue) => {
        this.filteredValue['user_type'] = userTypeFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValue);
      });
      this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
        this.filteredValue['email'] = emailFilterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValue);
      });
      this.dataSource.filterPredicate = this.customFilterPredicate();
    });
    this.fieldListener();
  }

  fieldListener() {
    this.sourceFilter.valueChanges.subscribe((status) => {
      this.filterValues.status = status;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  customFilterPredicate() {
    const myFilterPredicate = function (data: Table, filter: string): boolean {
      console.log(data, filter);

      let searchString = JSON.parse(filter);
      let nameFound = data.last_name
        .toString()
        .trim()
        .toLowerCase()
        .includes((searchString.name || '').toLowerCase());
      let userTypeFound = data.company.user_type
        .toString()
        .trim()
        .toLowerCase()
        .includes((searchString.user_type || '').toLowerCase());
      let statusFound = data.user_status.includes(searchString.status || '');
      let emailFound = data.email.includes(searchString.email || '');
      console.log(nameFound, userTypeFound, emailFound, statusFound);

      return nameFound && userTypeFound && emailFound && statusFound;
    };
    return myFilterPredicate;
  }
}
