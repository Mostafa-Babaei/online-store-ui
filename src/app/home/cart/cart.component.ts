import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartDto } from 'src/Models/cart/cart-dto';
import { CartService } from 'src/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private toastr: ToastrService, private router: Router) { }
  cartItems: CartDto[];
  totalInvoice: number = 0;
  ngOnInit(): void {
    this.getCartInfo();
  }

  computeDiscount() {
    this.toastr.warning("کد تخفیف وارد شده معتبر نیست");
  }

  submitOrder() {
    this.cartService.addCartToOrder().subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.router.navigate(['/invoice']);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  changeNumberOfItem(item: CartDto) {
    this.cartService.changeNumberOfItem(item.productId, item.count).subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.getCartInfo()
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  removeItem(index: number) {
    console.log(this.cartItems[index].title);
    this.cartService.removeItemFromCart(this.cartItems[index].productId).subscribe((response) => {
      if (response.isSuccess) {
        this.cartItems.splice(index, 1);
        this.toastr.warning(response.message);
      } else {
        this.toastr.warning(response.message);
      }
    });
  }

  getCartInfo() {
    this.cartService.getCartItems().subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.cartItems = response.data as CartDto[];
        this.totalInvoice = this.cartItems.reduce((accumulator, obj) => {
          return accumulator + obj.totalPrice;
        }, 0);
        this.cartItems.length
      } else {
        this.toastr.warning(response.message);
      }
    });
  }
}
