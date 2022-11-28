import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddToCart } from 'src/Models/order/add-to-cart';
import { ProductDto } from 'src/Models/product/product-dto';
import { AccountService } from 'src/services/account/account.service';
import { CartService } from 'src/services/cart/cart.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pId: number;
  product: ProductDto;
  constructor(private activeRoute: ActivatedRoute, private toastr: ToastrService, private router: Router,
    private productService: ProductService, private cartService: CartService, private accountService: AccountService) { }

  ngOnInit(): void {
    let id = this.activeRoute.params.subscribe((params: Params) => {
      this.pId = +params['id'];
    })
    if (!this.pId) {
      this.toastr.error("محصول یافت نشد");
      this.router.navigate(['/']);
    } else {
      this.getProduct();
    }
  }
  
  getProduct() {
    this.productService.getProduct(this.pId).subscribe((response) => {
      if(response.isSuccess){
        this.product = response.data as ProductDto;
      }else{
        this.toastr.error(response.message);
      }
    });
  }

  addToCart(item: ProductDto) {
    let addtoCart: AddToCart = { ProductId: item.productId, Count: 1 };

    // بررسی ورود کاربر
    if (!this.accountService.isLogined()) {
      this.toastr.warning("قبل از ثبت سفارش وارد حساب کاربری خود شوید");
      this.router.navigate(['/Login']);
      return;
    }

    //ثبت در سبد خرید
    this.cartService.addToCart(addtoCart).subscribe((response) => {
      if (response.isSuccess) {
        this.cartService.getNumberOfItem();
        this.toastr.success(response.message)
      } else {
        this.toastr.error(response.message)
      }
    })
  }


}
