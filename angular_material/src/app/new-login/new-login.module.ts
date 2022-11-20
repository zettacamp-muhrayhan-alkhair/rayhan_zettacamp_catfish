import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLoginComponent } from './new-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NewLoginComponent, title: 'Sign in' },
];

@NgModule({
  declarations: [NewLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
  ],
})
export class NewLoginModule {}
