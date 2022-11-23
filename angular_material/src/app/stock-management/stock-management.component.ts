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
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
})
export class StockManagementComponent implements OnInit {
  private subs = new SubSink();
  private dialogSubs = new SubSink();
  displayedColumns: string[] = ['name', 'stock', 'available', 'actions'];
  ingredientsLength: number;
  ingredients = [];
  dataSource = new MatTableDataSource();

  pageEvent: any;
  pageSize = 5;
  pageIndex = 0;

  filtername: any = new FormControl('');
  searchName = '';
  defaultFilter = '';

  availabilities: any[] = [
    { value: '', viewValue: 'All' },
    { value: 'Unavailable', viewValue: 'Unavailable' },
    { value: 'Available', viewValue: 'Available' },
  ];

  availability = '';

  constructor(
    private stockManagementService: StockManagementService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllStockWithPage();
    this.filtername.valueChanges.subscribe((data) => {
      this.searchName = data;
      this.getAllStockWithPage();
    });
  }

  getAllStockWithPage() {
    this.subs.sink = this.stockManagementService
      .getAllIngredientsWithPage(
        this.pageSize,
        this.pageIndex,
        this.searchName,
        this.availability
      )
      .valueChanges.subscribe((data: any) => {
        this.ingredients = data?.data?.GetAllIngredients?.data?.ingredient_data;
        this.ingredientsLength =
          data.data.GetAllIngredients.data.info_page[0].count;
        this.dataSource = new MatTableDataSource(
          data?.data?.GetAllIngredients?.data?.ingredient_data
        );
      });
  }

  onFilterAvailability(event: any) {
    this.availability = event;
    this.stockManagementService
      .getAllIngredientsWithPage(
        this.pageSize,
        this.pageIndex,
        this.searchName,
        this.availability
      )
      .valueChanges.subscribe(() => {
        this.getAllStockWithPage();
      });
  }

  indexingPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.stockManagementService
      .getAllIngredientsWithPage(
        this.pageSize,
        this.pageIndex,
        this.searchName,
        this.availability
      )
      .valueChanges.subscribe((data: any) => {
        this.ingredients = data.data.GetAllIngredients.data.ingredient_data;
        this.dataSource = new MatTableDataSource(this.ingredients);
        this.getAllStockWithPage();
      });
  }

  onAdd() {
    openAddStockDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => {
        this.stockManagementService
          .createIngredient(val)
          .subscribe(() => this.getAllStockWithPage());
      });
  }

  onUpdate(ingredient: any) {
    openEditStockDialog(this.matDialog, ingredient)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.stockManagementService.updateIngredient(val).subscribe();
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
        this.stockManagementService.deleteIngredient(element).subscribe(
          (data: any) => {
            Swal.fire({
              icon: 'success',
              title: data?.data?.DeleteIngredient?.message,
            });
            this.getAllStockWithPage();
          },
          (err) =>
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message,
            })
        );
      } else {
        this.getAllStockWithPage();
      }
    });
  }
}
