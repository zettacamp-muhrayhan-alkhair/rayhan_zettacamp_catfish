import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { SubSink } from 'subsink/dist/subsink';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
})
export class ListMenuComponent implements OnInit {
  menus: any = [];
  subs = new SubSink();
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // this.subs.sink = this.menuService.getAllMenus().subscribe((data: any) => {
    //   this.menus = data;
    //   console.log(data.data);
    //   console.log(this.menus.data);
    // });
  }
}
