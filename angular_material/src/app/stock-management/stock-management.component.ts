import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { openAddStockDialog } from './stock-form/stock-form.component';
import { StockManagementService } from './stock-management.service';
import { filter } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
})
export class StockManagementComponent implements OnInit {
  private subs = new SubSink();
  displayedColumns: string[] = ['name', 'stock', 'status'];
  ingredients: any = [];
  dataSource = new MatTableDataSource();

  constructor(
    private stockManagementService: StockManagementService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.stockManagementService
      .getAllIngredients()
      .subscribe((data: any) => {
        this.ingredients = data.data.GetAllIngredients.data;
        this.dataSource = new MatTableDataSource(
          data.data.GetAllIngredients.data
        );
      });
  }

  onClick() {
    openAddStockDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => {
        this.stockManagementService.createIngredient(val);
      });
  }
}
