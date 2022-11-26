import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paging } from 'src/Models/common/paging';
import { OrderDto } from 'src/Models/order/order-dto';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-order-of-customer',
  templateUrl: './order-of-customer.component.html',
  styleUrls: ['./order-of-customer.component.css']
})
export class OrderOfCustomerComponent implements OnInit {

  orders: OrderDto[];
  dataModel: Paging;

  page: number = 1;
  constructor(private orderService: OrderService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOrders(this.page);
  }

  getOrders(pageNum: number) {
    this.orderService.getCustomerOrder(pageNum).subscribe((response) => {
      if (response.isSuccess) {
        debugger;
        this.dataModel = response.data as Paging;
        this.orders = this.dataModel.pageData as OrderDto[];
        console.log(this.orders);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

  goNextPage() {

  }

  changePage(newPage: number) {
    this.getOrders(newPage);
  }

}
