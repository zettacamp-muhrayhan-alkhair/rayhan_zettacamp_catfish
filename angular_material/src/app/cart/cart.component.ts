import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { openEditRecipeCartDialog } from './cart-edit/cart-edit.component';
import { CartService } from './cart.service';
import { openHistoryTransactionDialog } from './history-transaction/history-transaction.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  isLoading: any = 'on';
  private subs = new SubSink();
  cart: any = [];

  constructor(private cartService: CartService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.subs.sink = this.cartService.getAllTransaction().subscribe(
      (data: any) => {
        this.cart = data?.data?.transaction_data;
        const arr = [];
        for (let transaction of data?.data?.transaction_data) {
          const arrTemp = [];
          for (let recipe of transaction.menu) {
            const temp = {
              ...recipe.recipe_id,
              amount: recipe.amount,
              discount_price:
                recipe.recipe_id.price -
                (recipe.recipe_id.discount / 100) * recipe.recipe_id.price,
            };
            arrTemp.push(temp);
          }
          const obj = {
            ...transaction,
            _id: transaction._id,
            menu: arrTemp,
          };
          arr.push(obj);
        }
        this.cart = arr;
        console.log(this.cart);
      },
      (err) => {
        Swal.fire({
          title: 'No Transaction',
          text: err.message,
          icon: 'error',
        });
      }
    );
  }

  onCheckOut(data: any) {
    this.isLoading = null;
    this.cartService.checkOut(data).subscribe(
      (data: any) => {
        this.isLoading = data;
        Swal.fire({
          title: 'Transaction is Success',
          text: data.data.UpdateTransaction.message,
          icon: 'success',
        }).then(() => {
          this.getAllTransactions();
        });
      },
      (err) => {
        this.isLoading = err;
        if (err.message.includes('Transaction is Failed')) {
          let message = err.message
            .replaceAll('"', '')
            .replaceAll('[', '')
            .replaceAll(']', '')
            .replaceAll(',', ', ');
          Swal.fire({
            title: 'Transaction is failed',
            text: message,
            icon: 'error',
          }).then(() => {
            this.getAllTransactions();
          });
        } else {
          console.log(err.message);
          Swal.fire({
            title: err,
            text: err.message,
            icon: 'error',
          }).then(() => {
            this.getAllTransactions();
          });
        }
      }
    );
  }

  onCancel(data: any) {
    this.cartService.cancelTransaction(data).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Transaction is Deleted',
          text: data.data.DeleteTransaction.message,
          icon: 'success',
        }).then(() => {
          this.getAllTransactions();
        });
      },
      (err) => {
        Swal.fire({
          title: 'Transaction is not Deleted',
          text: err.message,
          icon: 'error',
        });
      }
    );
  }

  onEdit(data: any) {
    openEditRecipeCartDialog(this.matDialog, data)
      .pipe(filter((val) => !!val))
      .subscribe((val: any) => {
        this.cartService.updateTransaction(val).subscribe(
          (data: any) => {
            Swal.fire({
              title: 'Transaction is Updated',
              text: data.data.UpdateTransaction.message,
              icon: 'success',
            }).then(() => {
              this.getAllTransactions();
            });
          },
          (err) => {
            Swal.fire({
              title: 'Transaction is not Updated',
              text: err.message,
              icon: 'error',
            });
          }
        );
      });
  }

  onRemove(data: any) {
    if (this.cart[0].menu.length === 1) {
      this.cartService.cancelTransaction(this.cart[0]._id).subscribe(
        (data: any) => {
          Swal.fire({
            title: 'Transaction is Updated',
            text: data.data.DeleteTransaction.message,
            icon: 'success',
          }).then(() => {
            this.getAllTransactions();
          });
        },
        (err) => {
          Swal.fire({
            title: 'Transaction is not updated',
            text: err.message,
            icon: 'success',
          });
        }
      );
    } else {
      this.cartService.removeItem(data).subscribe(
        (data: any) => {
          Swal.fire({
            title: 'Transaction is Updated',
            text: 'Recipe is deleted from cart',
            icon: 'success',
          }).then(() => {
            this.getAllTransactions();
          });
        },
        (err) => {
          Swal.fire({
            title: 'Transaction is not Updated',
            text: err.message,
            icon: 'error',
          });
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
