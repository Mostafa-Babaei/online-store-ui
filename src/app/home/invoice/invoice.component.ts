import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderDto } from 'src/Models/order/order-dto';
import { AccountService } from 'src/services/account/account.service';
import { CartService } from 'src/services/cart/cart.service';
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
      if (result.isSuccess) {
        this.orderDto = result.data as OrderDto;
      } else {
        this.toastr.error(result.message);
      }
    });
  }
  
}

