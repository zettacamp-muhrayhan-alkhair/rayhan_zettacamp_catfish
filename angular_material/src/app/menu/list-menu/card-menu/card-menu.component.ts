import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { MenuManagementService } from 'src/app/menu-management/menu-management.service';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';
import { openAddMenuUserDialog } from '../../menu-form/menu-form.component';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css'],
})
export class CardMenuComponent implements OnInit {
  @Input() recipe: any;
  ingredients: any = [];
  isNotAvailableStock = false;
  constructor(
    private matDialog: MatDialog,
    private stockManagementService: StockManagementService,
    private menuManagementService: MenuManagementService
  ) {}

  ngOnInit(): void {
    this.menuManagementService
      .getAllIngredients()
      .valueChanges.subscribe((data: any) => {
        this.ingredients = data.data.GetAllIngredients.data.ingredient_data;
      });

    let arr = [];
    for (let ingredient of this.recipe.ingredients) {
      arr.push(ingredient.ingredient_id.available);
    }
    let arrCheck = arr.includes(false);
    if (arrCheck === true) {
      this.isNotAvailableStock = true;
    } else {
      this.isNotAvailableStock = false;
    }
  }

  onAddToCart(recipe: any) {
    console.log(recipe);
    if (!localStorage.getItem('menu')) {
      localStorage.setItem('menu', JSON.stringify([]));
    }
    openAddMenuUserDialog(this.matDialog, recipe)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        let arr: any = localStorage.getItem('menu');
        arr = JSON.parse(arr);
        let arrCheck = arr.filter((data: any) => data._id === val._id);
        if (arrCheck.length > 0) {
          arr.map((data: any) => {
            data.amount += val.amount;
            data.note = val.note;
            data.name = recipe.recipe_name;
            console.log(data);

            return data;
          });
        } else {
          arr.push(val);
        }
        localStorage.setItem('menu', JSON.stringify(arr));
        console.log(arr);
      });
  }
}
