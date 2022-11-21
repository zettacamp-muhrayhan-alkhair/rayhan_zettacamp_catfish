import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getAllTransaction().valueChanges.subscribe((data: any) => {
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
        this.cartService.getAllTransaction().refetch();
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

  onCancel(data) {
    this.cartService.cancelTransaction(data).subscribe((data: any) => {
      console.log(data);
    });
  }
}
