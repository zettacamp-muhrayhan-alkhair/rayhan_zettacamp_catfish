import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { StockFormComponent } from './stock-form/stock-form.component';

const routes: Routes = [
  { path: '', component: StockManagementComponent, title: 'Stock Management' },
];

@NgModule({
  declarations: [StockManagementComponent, StockFormComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
  exports: [StockManagementComponent],
})
export class StockManagementModule {}
