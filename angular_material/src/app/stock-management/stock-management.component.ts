import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { openAddStockDialog } from './stock-form/stock-form.component';
import { openEditStockDialog } from './stock-form/stock-edit/stock-edit.component';
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
  private dialogSubs = new SubSink();
  displayedColumns: string[] = ['name', 'stock', 'available', 'actions'];
  ingredients: any = [];
  dataSource = new MatTableDataSource();

  constructor(
    private stockManagementService: StockManagementService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.stockManagementService
      .getAllIngredients()
      .valueChanges.subscribe((data: any) => {
        this.ingredients = data.data.GetAllIngredients.data.ingredient_data;
        this.dataSource = new MatTableDataSource(
          data.data.GetAllIngredients.data.ingredient_data
        );
      });
  }

  onAdd() {
    openAddStockDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => {
        this.stockManagementService
          .createIngredient(val)
          .subscribe(() =>
            this.stockManagementService.getAllIngredients().refetch()
          );
      });
  }

  onUpdate(ingredient: any) {
    openEditStockDialog(this.matDialog, ingredient)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.stockManagementService.updateIngredient(val).subscribe();
        console.log(val._id);
      });
  }

  onDelete(element: any) {
    this.stockManagementService
      .deleteIngredient(element)
      .subscribe(() =>
        this.stockManagementService.getAllIngredients().refetch()
      );
  }
}
