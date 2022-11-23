import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';
import { CartEditComponent } from './cart-edit/cart-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryTransactionComponent } from './history-transaction/history-transaction.component';

const routes: Routes = [{ path: '', component: CartComponent, title: 'Cart' }];

@NgModule({
  declarations: [CartComponent, CartEditComponent, HistoryTransactionComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [CartComponent, HistoryTransactionComponent, CartEditComponent],
})
export class CartModule {}
