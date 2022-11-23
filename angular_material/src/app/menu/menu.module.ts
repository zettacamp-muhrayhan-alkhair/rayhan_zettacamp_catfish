import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { CardMenuComponent } from './list-menu/card-menu/card-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: MenuComponent, title: 'Menu' }];

@NgModule({
  declarations: [
    MenuComponent,
    ListMenuComponent,
    CardMenuComponent,
    MenuFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
