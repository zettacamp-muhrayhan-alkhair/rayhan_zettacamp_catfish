import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CartComponent, title: 'Cart' }];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
  exports: [CartComponent],
})
export class CartModule {}
