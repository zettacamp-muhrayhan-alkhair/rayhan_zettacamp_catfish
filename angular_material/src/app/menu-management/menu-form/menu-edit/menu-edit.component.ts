import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Recipe } from 'src/app/model/recipe.model';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  allIngredients: any = [];

  menuForm:any;

  constructor(
    private fb: FormBuilder,
    private stockManagementService: StockManagementService,
    private dialogRef: MatDialogRef<MenuEditComponent>,
    @Inject(MAT_DIALOG_DATA) private recipe: any
  ) {}

  ngOnInit(): void {
    this.initForm();

    let tempIngeridient = {
      recipe_name: this.recipe.recipe_name,
      link_recipe: this.recipe.link_recipe,
      price: this.recipe.price
    }

    let ingredients = [];
      
    if(this.recipe?.ingredients?.length) {
      this.recipe.ingredients.forEach((ingredient) => {
        ingredients.push({
          ingredient_id: ingredient.ingredient_id._id,
          stock_used: ingredient.stock_used
        })
        this.addIngredient();
      });
    const temp = {
      ...tempIngeridient,
      ingredients: ingredients,
    }

    this.menuForm.patchValue(temp);
    }

    this.stockManagementService
      .getAllIngredients()
      .valueChanges.subscribe(
        (data: any) =>
          (this.allIngredients =
            data?.data?.GetAllIngredients?.data?.ingredient_data)
      );
  }

  initForm(){
    this.menuForm = new FormGroup({
      recipe_name: this.fb.control(null, Validators.required),
      link_recipe: this.fb.control(null, Validators.required),
      price: this.fb.control(null, Validators.required),
      ingredients: this.fb.array([]),
    })
  }

  onSubmit() {
    this.dialogRef.close({ ...this.menuForm.value, _id: this.recipe._id });
  }

  onClose() {
    this.dialogRef.close();
  }

  get ingredients(): FormArray {
    return this.menuForm.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      ingredient_id: this.fb.control('', Validators.required),
      stock_used: this.fb.control('', Validators.required),
    });
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }
}

export function openEditMenuDialog(matDialog: MatDialog, recipe: Recipe) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;

  config.data = {
    ...recipe,
  };


  const dialogRef = matDialog.open(MenuEditComponent, config);

  return dialogRef.afterClosed();
}
