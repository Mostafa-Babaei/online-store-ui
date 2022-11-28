import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart/cart.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  numberOfCart: number;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.numberOfCart = this.cartService.readNumberOfItem();
  }

}
