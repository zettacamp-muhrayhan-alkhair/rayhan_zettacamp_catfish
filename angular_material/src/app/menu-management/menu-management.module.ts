import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagementComponent } from './menu-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuFormComponent } from './menu-form/menu-form.component';

const routes: Routes = [
  { path: '', component: MenuManagementComponent, title: 'Menu Management' },
];

@NgModule({
  declarations: [MenuManagementComponent, MenuFormComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
  exports: [MenuManagementComponent],
})
export class MenuManagementModule {}
