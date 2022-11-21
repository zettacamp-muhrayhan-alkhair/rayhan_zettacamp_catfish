import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { openAddStockDialog } from './stock-form/stock-form.component';
import { openEditStockDialog } from './stock-form/stock-edit/stock-edit.component';
import { StockManagementService } from './stock-management.service';
import { filter } from 'rxjs';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { MenuManagementService } from '../menu-management/menu-management.service';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
})
export class StockManagementComponent implements OnInit {
  private subs = new SubSink();
  private dialogSubs = new SubSink();
  displayedColumns: string[] = ['name', 'stock', 'available', 'actions'];
  ingredientsLength;
  ingredients = [];
  dataSource = new MatTableDataSource();

  pageEvent: any;
  pageSize = 5;
  pageIndex = 0;

  constructor(
    private stockManagementService: StockManagementService,
    private matDialog: MatDialog,
    private menuManagementService: MenuManagementService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.stockManagementService
      .getAllIngredientsWithPage(this.pageSize, this.pageIndex)
      .valueChanges.subscribe((data: any) => {
        this.ingredients = data?.data?.GetAllIngredients?.data?.ingredient_data;
        this.ingredientsLength =
          data?.data?.GetAllIngredients?.data.info_page[0].count;
        this.dataSource = new MatTableDataSource(
          data?.data?.GetAllIngredients?.data?.ingredient_data
        );
      });
  }

  indexingPage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.stockManagementService
      .getAllIngredientsWithPage(this.pageSize, this.pageIndex)
      .valueChanges.subscribe((data: any) => {
        this.ingredients = data.data.GetAllIngredients.data.ingredient_data;
        this.dataSource = new MatTableDataSource(this.ingredients);
        this.stockManagementService
          .getAllIngredientsWithPage(this.pageSize, this.pageIndex)
          .refetch();
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
        this.stockManagementService.getAllIngredients().refetch();
        this.menuManagementService.getAllRecipes().refetch();
      });
  }

  onDelete(element: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((confirm: any) => {
      if (confirm.isConfirmed) {
        this.stockManagementService.deleteIngredient(element);
        this.stockManagementService.getAllIngredients().refetch();
      } else {
        this.stockManagementService.getAllIngredients().refetch();
      }
    });
  }
}
