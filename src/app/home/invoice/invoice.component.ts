import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderDto } from 'src/Models/order/order-dto';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orderNumber: string = "";
  constructor( private activeRoute: ActivatedRoute,
    private toastr: ToastrService, private orderService: OrderService) { }

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

