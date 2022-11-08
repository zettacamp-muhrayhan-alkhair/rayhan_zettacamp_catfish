import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolTableComponent } from './school-table/school-table.component';
import { SchoolManagementComponent } from './school-management.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SchoolManagementComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [SchoolTableComponent, SchoolManagementComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
  exports: [SchoolTableComponent, SchoolManagementComponent],
})
export class SchoolManagementModule {}
