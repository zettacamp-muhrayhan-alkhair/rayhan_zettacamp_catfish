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
  private subs = new SubSink();
  displayedColumns: string[] = ['name', 'ingredients', 'actions'];
  recipes: any = [];
  dataSource = new MatTableDataSource();

  recipesLength;
  pageEvent;
  pageSize = 5;
  pageIndex = 0;

  constructor(
    private menuManagementService: MenuManagementService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.menuManagementService
      .getAllRecipesWithPage(this.pageSize, this.pageIndex)
      .valueChanges.subscribe((data: any) => {
        this.recipes = data.data.GetAllrecipes.data.recipe_data;
        this.recipesLength = data?.data?.GetAllrecipes?.data.info_page[0].count;
        this.dataSource = new MatTableDataSource(this.recipes);
      });
  }

  indexingPage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.menuManagementService
      .getAllRecipesWithPage(this.pageSize, this.pageIndex)
      .valueChanges.subscribe((data: any) => {
        this.recipes = data.data.GetAllrecipes.data.recipe_data;
        this.dataSource = new MatTableDataSource(this.recipes);
        this.menuManagementService
          .getAllRecipesWithPage(this.pageSize, this.pageIndex)
          .refetch();
      });
  }

  onAdd() {
    openAddMenuDialog(this.matDialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => {
        this.menuManagementService.createRecipe(val);
        this.menuManagementService.getAllRecipes().refetch();
      });
  }

  onPublish(event: any, element: any) {
    const data = {
      _id: element._id,
      published: event.checked ? 'Publish' : 'Unpublish',
    };
    this.menuManagementService.updatePublished(data).subscribe(() => {
      this.menuManagementService.getPublishRecipes().refetch();
    });
  }

  onUpdate(recipe: any) {
    openEditMenuDialog(this.matDialog, recipe)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.menuManagementService
          .updateRecipe(val)
          .subscribe(() =>
            this.menuManagementService.getAllRecipes().refetch()
          );
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
        this.menuManagementService.deleteRecipe(element);
      } else {
        this.menuManagementService.getAllRecipes().refetch();
      }
    });
  }
}
