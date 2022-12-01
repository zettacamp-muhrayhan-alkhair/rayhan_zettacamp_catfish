import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagementComponent } from './menu-management.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MenuEditComponent } from './menu-form/menu-edit/menu-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
// import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  { path: '', component: MenuManagementComponent, title: 'Menu Management' },
];

@NgModule({
  declarations: [
    MenuManagementComponent,
    MenuFormComponent,
    MenuEditComponent,
    MenuDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NgSelectModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [MenuManagementComponent, MenuEditComponent],
})
export class MenuManagementModule {}
