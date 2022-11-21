import { Component, OnInit } from '@angular/core';
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
    this.cartService.checkOut(data).subscribe((data) => {});
  }
}
