import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { openAddMenuDialog } from './menu-form/menu-form.component';
import { MenuManagementService } from './menu-management.service';
import { filter } from 'rxjs';
import { openEditMenuDialog } from './menu-form/menu-edit/menu-edit.component';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css'],
})
export class MenuManagementComponent implements OnInit {
  publisheds: any[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'Publish', viewValue: 'Publish' },
    { value: 'Unpublish', viewValue: 'Unpublish' },
  ];

  published = 'all';
  private subs = new SubSink();
  displayedColumns: string[] = ['name', 'ingredients', 'actions'];
  recipes: any[] = [];
  dataSource = new MatTableDataSource();

  recipesLength: number;
  pageEvent: any;
  pageSize: number = 5;
  pageIndex: number = 0;

  constructor(
    private menuManagementService: MenuManagementService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllRecipesWithPage();
  }

  getAllRecipesWithPage() {
    this.subs.sink = this.menuManagementService
      .getAllRecipesWithPage(this.pageSize, this.pageIndex, this.published)
      .valueChanges.subscribe((data: any) => {
        this.recipes = data.data.GetAllrecipes.data.recipe_data;
        this.recipesLength = data?.data?.GetAllrecipes?.data.info_page[0].count;
        this.dataSource = new MatTableDataSource(this.recipes);
      });

    this.menuManagementService
      .getAllRecipesWithPublished(this.published)
      .valueChanges.subscribe((data: any) => {
        this.recipesLength = data.data.GetAllrecipes.data.recipe_data.length;
      });
  }

  indexingPage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.menuManagementService
      .getAllRecipesWithPage(this.pageSize, this.pageIndex, this.published)
      .valueChanges.subscribe((data: any) => {
        this.recipes = data.data.GetAllrecipes.data.recipe_data;
        this.dataSource = new MatTableDataSource(this.recipes);
        this.getAllRecipesWithPage();
      });
  }

  onAdd() {
    openAddMenuDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => {
        this.menuManagementService.createRecipe(val).subscribe((data: any) => {
          this.getAllRecipesWithPage();
          Swal.fire({
            title: 'Recipe Added',
            icon: 'success',
            text: data.data.CreateRecipe.message,
          });
        });
      });
  }

  onPublish(event: any, element: any) {
    const data = {
      _id: element._id,
      published: event.checked ? 'Publish' : 'Unpublish',
    };
    this.menuManagementService.updatePublished(data).subscribe(() => {
      this.getAllRecipesWithPage();
    });
  }

  onFilterPublished(event: any) {
    this.published = event;
    this.menuManagementService
      .getAllRecipesWithPage(this.pageSize, this.pageIndex, this.published)
      .valueChanges.subscribe(() => {
        this.getAllRecipesWithPage();
      });
  }

  onUpdate(recipe: any) {
    openEditMenuDialog(this.matDialog, recipe)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.menuManagementService
          .updateRecipe(val)
          .subscribe(() => this.getAllRecipesWithPage());
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
        this.menuManagementService.deleteRecipe(element).subscribe(
          (data: any) => {
            console.log(data);
            Swal.fire({
              icon: 'success',
              title: 'success',
              text: data.data.DeleteRecipe.message,
            });
            this.getAllRecipesWithPage();
          },
          (err) =>
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message,
            })
        );
      } else {
        this.getAllRecipesWithPage();
      }
    });
  }
}
