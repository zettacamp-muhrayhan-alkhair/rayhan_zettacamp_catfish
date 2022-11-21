import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu.component';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'price', 'note', 'actions'];

  recipes;
  dataSource = new MatTableDataSource();
  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.recipes = localStorage.getItem('menu');
    this.recipes = JSON.parse(this.recipes);
    this.recipes.price =
      Number(this.recipes.amount) * Number(this.recipes.price);
    this.dataSource = new MatTableDataSource(this.recipes);
  }

  onClick() {
    for (let recipe of this.recipes) {
      delete recipe.name;
      delete recipe.price;
      delete recipe.recipe;
      recipe.recipe_id = recipe._id;
      delete recipe._id;
    }
    this.menuService.createTransaction(this.recipes).subscribe((data) => {
      localStorage.removeItem('menu');
    });
  }

  onEdit(data) {
    console.log('met edit');
  }

  onDelete(data) {
    let menu: any = localStorage.getItem('menu');
    menu = JSON.parse(menu);
    let index = menu.filter((val) => val._id !== data._id);
    // console.log(index);
    localStorage.setItem('menu', JSON.stringify(index));
    this.router.navigate(['menu']).then(() => {
      window.location.reload();
    });
  }
}
