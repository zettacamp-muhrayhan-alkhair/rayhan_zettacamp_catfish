import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'price', 'note'];

  recipes;
  dataSource = new MatTableDataSource();
  constructor(private menuComponentTS: MenuComponent) {}

  ngOnInit(): void {
    this.recipes = localStorage.getItem('menu');
    this.recipes = JSON.parse(this.recipes);
    console.log(this.recipes);
    this.dataSource = new MatTableDataSource(this.recipes);
  }

  onEdit(data) {
    console.log('met edit');
  }

  onDelete(data) {
    console.log('met delete');
  }
}
