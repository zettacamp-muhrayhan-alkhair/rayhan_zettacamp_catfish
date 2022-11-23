import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { openEditRecipeCartDialog } from './cart-edit/cart-edit.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  cart: any = [];

  constructor(private cartService: CartService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.subs.sink = this.cartService
      .getAllTransaction()
      .subscribe((data: any) => {
        let menu = data.data.GetAllTransaction.data.transaction_data;
        this.cart = menu;
      });
  }

  onCheckOut(data: any) {
    this.cartService.checkOut(data).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Transaction is Success',
          text: data.data.UpdateTransaction.message,
          icon: 'success',
        });
        this.getAllTransactions();
      },
      (err) => {
        Swal.fire({
          title: 'Transaction is failed',
          text: err.message,
          icon: 'error',
        });
      }
    );
  }

  onCancel(data: any) {
    this.cartService.cancelTransaction(data).subscribe(() => {
      this.getAllTransactions();
    });
  }

  onEdit(data: any) {
    openEditRecipeCartDialog(this.matDialog, data)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.cartService.updateTransaction(val).subscribe();
      });
  }

  onRemove(data: any) {
    if (this.cart[0].menu.length === 1) {
      this.cartService
        .cancelTransaction(this.cart[0]._id)
        .subscribe((data: any) => {
          Swal.fire({
            title: 'Dropped',
            text: data.data.DeleteTransaction.message,
            icon: 'success',
          });
        });
    } else {
      this.cartService.removeItem(data).subscribe((data: any) => {
        Swal.fire({
          title: 'Dropped',
          text: 'Recipe is deleted from cart',
          icon: 'success',
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
