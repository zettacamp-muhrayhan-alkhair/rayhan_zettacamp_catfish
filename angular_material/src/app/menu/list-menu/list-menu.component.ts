import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { SubSink } from 'subsink/dist/subsink';
import { MenuManagementService } from 'src/app/menu-management/menu-management.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
})
export class ListMenuComponent implements OnInit {
  menu: any = [];
  subs = new SubSink();
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getAllRecipesOnMenu();
  }

  getAllRecipesOnMenu() {
    this.subs.sink = this.menuService
      .getPublishRecipes()
      .subscribe((data: any) => {
        this.menu = data.data.GetAllrecipes.data.recipe_data;
      });
  }
}
