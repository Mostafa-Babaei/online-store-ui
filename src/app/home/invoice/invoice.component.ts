import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandDto } from 'src/Models/brand/brand-dto';
import { Category } from 'src/Models/category/category.model';
import { AddToCart } from 'src/Models/order/add-to-cart';
import { OrderDto } from 'src/Models/order/order-dto';
import { ProductDto } from 'src/Models/product/product-dto';
import { HomeRequestDto } from 'src/Models/Shop/home-request-dto';
import { AccountService } from 'src/services/account/account.service';
import { BrandService } from 'src/services/brand/brand.service';
import { CartService } from 'src/services/cart/cart.service';
import { CategoryService } from 'src/services/category/category.service';
import { OrderService } from 'src/services/order/order.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orderNumber: string = "";
  constructor(private productServide: ProductService, private router: Router, private accountService: AccountService, private activeRoute: ActivatedRoute,
    private toastr: ToastrService, private orderService: OrderService, private cartService: CartService) { }

  orderDto: OrderDto;
  ngOnInit(): void {
    this.orderNumber = this.activeRoute.snapshot.queryParamMap.get('orderNumber') ?? "".toString();
    this.toastr.info(this.orderNumber);
    this.getorder();
  }

  getorder() {
    if (!this.orderNumber || this.orderNumber == "") {
      this.toastr.warning("سفارش یافت نشد");
      return;
    }

    this.orderService.getOrder(this.orderNumber).subscribe((result) => {
      console.log(result);
      if (result.isSuccess) {
        this.orderDto = result.data as OrderDto;
      } else {
        this.toastr.error(result.message);
      }
    });
  }
  
}

