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
  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService, private orderService: OrderService) { }
  loadComplate: boolean;
  orderDto!: OrderDto;
  ngOnInit(): void {
    this.loadComplate = false;
    this.activeRoute.queryParams.subscribe((queryPrams) => {
      this.orderNumber = queryPrams['orderNumber'];
      this.getorder();
    })
  }

  getorder() {

    if (!this.orderNumber || this.orderNumber == "") {
      this.toastr.warning("سفارش یافت نشد");
      this.loadComplate = true;
      return;
    }

    this.orderService.getOrder(this.orderNumber).subscribe((result) => {
      if (result.isSuccess) {
        this.orderDto = result.data as OrderDto;
        this.loadComplate = true;
        console.log(this.orderDto);
      } else {
        this.toastr.error(result.message);
        this.loadComplate = true;
      }
    });
  }

}

