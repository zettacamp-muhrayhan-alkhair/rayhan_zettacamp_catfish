import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { StockFormComponent } from './stock-form/stock-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockEditComponent } from './stock-form/stock-edit/stock-edit.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: StockManagementComponent, title: 'Stock Management' },
];

@NgModule({
  declarations: [
    StockManagementComponent,
    StockFormComponent,
    StockEditComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [StockManagementComponent],
})
export class StockManagementModule {}
