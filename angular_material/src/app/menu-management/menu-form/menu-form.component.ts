import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';
import { MenuManagementService } from '../menu-management.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent implements OnInit {
  filteredOptions: Observable<any[]>[] = [];
  allIngredients: any = [];
  menuForm = this.fb.group({
    recipe_name: this.fb.control('', Validators.required),
    link_recipe: this.fb.control('', Validators.required),
    price: this.fb.control('', Validators.required),
    discount: this.fb.control('', Validators.required),
    ingredients: this.fb.array([]),
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MenuFormComponent>,
    @Inject(MAT_DIALOG_DATA) private recipe: Recipe,
    private menuManagementService: MenuManagementService
  ) {}

  ngOnInit(): void {
    this.addIngredient();
    this.menuManagementService.getAllIngredients().subscribe((data: any) => {
      this.allIngredients = data.data.GetAllIngredients.data.ingredient_data;
    });
    this.manageNameControl(this.ingredients.length - 1);
  }

  manageNameControl(index: number) {
    this.filteredOptions[index] = this.ingredients
      .at(index)
      .get('ingredient_id')
      .valueChanges.pipe(
        startWith<string>(''),
        map((value: any) => (typeof value === 'string' ? value : value.name)),
        map((name: string) =>
          name ? this._filter(name) : this.allIngredients.slice()
        )
      );
  }

  displayFn(ingredient?: any): string | undefined {
    return ingredient ? ingredient.name : undefined;
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.allIngredients.filter(
      (ingredient: any) =>
        ingredient.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  // Dialog
  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.menuForm.value);
  }

  get ingredients(): FormArray {
    return this.menuForm.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      ingredient_id: this.fb.control('', Validators.required),
      stock_used: this.fb.control('', [Validators.required, Validators.min(1)]),
    });
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }
}

export function openAddMenuDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;

  config.width = '590px';

  const dialogRef = matDialog.open(MenuFormComponent, config);

  return dialogRef.afterClosed();
}
