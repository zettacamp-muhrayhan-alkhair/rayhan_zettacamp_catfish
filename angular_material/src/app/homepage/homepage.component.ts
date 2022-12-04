import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  isToken: any;
  specialOffer = [];
  menuHighligth = [];
  oneMenuHighligth: any;
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.isToken = localStorage.getItem('token');
    this.getSpecialOffer();
    this.getMenuHighlight();
  }

  getSpecialOffer() {
    this.homeService.getSpecialOffer().subscribe((data: any) => {
      const arr = [];
      data.menuHighlight.map((data: any) => {
        const obj = {
          ...data,
          discount_price: data.price - (data.discount / 100) * data.price,
        };
        arr.push(obj);
      });
      this.specialOffer = arr;
    });
  }

  getMenuHighlight() {
    this.homeService.getMenuHighlight().subscribe((data: any) => {
      this.menuHighligth = data.specialOffer;
      const menuHighligth =
        this.menuHighligth[
          Math.floor(Math.random() * this.menuHighligth.length)
        ];
      this.oneMenuHighligth = menuHighligth;
    });
  }

  onAddToCart() {
    console.log('cart');
  }

  onMenu() {
    this.router.navigate(['menu']);
  }

  onOrder() {
    if (this.isToken) {
      if (this.isToken === null) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['cart']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
