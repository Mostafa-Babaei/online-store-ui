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
  loadComplate: boolean;

  ngOnInit(): void {
    this.loadComplate = false;
    this.getCartInfo();
  }

  computeDiscount() {
    this.toastr.warning("کد تخفیف وارد شده معتبر نیست");
  }

  submitOrder() {
    this.cartService.addCartToOrder().subscribe((response) => {
      if (response.isSuccess) {
        this.cartService.setNumberOfItem(0);
        this.toastr.success(response.message);
        console.log(response.data);
        this.router.navigate(['/invoice'], { queryParams: { orderNumber: response.data } });
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  changeNumberOfItem(item: CartDto) {
    this.cartService.changeNumberOfItem(item.productId, item.count).subscribe((response) => {
      if (response.isSuccess) {
        this.cartService.getNumberOfItem();
        this.toastr.success(response.message);
        this.getCartInfo()
      } else {
        this.toastr.error(response.message);
      }
    });

  }

  removeItem(index: number) {
    this.cartService.removeItemFromCart(this.cartItems[index].productId).subscribe((response) => {
      if (response.isSuccess) {
        this.cartService.getNumberOfItem();
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
        this.cartService.getNumberOfItem();
        this.cartItems = response.data as CartDto[];
        this.totalInvoice = this.cartItems.reduce((accumulator, obj) => {
          return accumulator + obj.totalPrice;
        }, 0);
        this.loadComplate = true;
      } else {
        this.toastr.warning(response.message);
        this.loadComplate = true;
      }
    });

  }
}
