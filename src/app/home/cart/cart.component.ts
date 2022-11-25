import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartDto } from 'src/Models/cart/cart-dto';
import { CartService } from 'src/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private toastr: ToastrService) { }
  cartItems: CartDto[];
  totalInvoice: number = 0;
  ngOnInit(): void {
    this.getCartInfo();
  }

  computeDiscount() {
    this.toastr.warning("کد تخفیف وارد شده معتبر نیست");
  }

  submitOrder() {
    this.toastr.warning("سفارش شما ثبت شد");
  }

  changeNumberOfItem(item: CartDto) {
    this.toastr.warning(item.count.toString());
  }

  remodeItem(item: CartDto) {
    this.toastr.warning(item.title + "حذف شد");
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
