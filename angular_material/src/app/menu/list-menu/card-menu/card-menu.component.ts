import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { MenuManagementService } from 'src/app/menu-management/menu-management.service';
import { StockManagementService } from 'src/app/stock-management/stock-management.service';
import Swal from 'sweetalert2';
import { openAddMenuUserDialog } from '../../menu-form/menu-form.component';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css'],
})
export class CardMenuComponent implements OnInit {
  @Input() recipe: any;
  isNotAvailableStock = false;
  ingredients: string[] = [];
  allIngredients: any;
  isToken: boolean = false;

  constructor(private matDialog: MatDialog, private menuService: MenuService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isToken = true;
    } else {
      this.isToken = false;
    }

    for (let ingredient of this.recipe.ingredients) {
      this.ingredients.push(ingredient.ingredient_id.name);
      this.allIngredients = this.ingredients.join(', ');
    }

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
    openAddMenuUserDialog(this.matDialog, recipe)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.menuService.createTransaction(val).subscribe(
          (data: any) => {
            Swal.fire({
              title: 'Recipe added to cart',
              text: data.data.CreateTransaction.message,
              icon: 'success',
            });
          },
          (err: any) => {
            Swal.fire({
              title: 'Recipe not added to cart',
              text: err.message,
              icon: 'error',
            });
          }
        );
      });
  }
}
