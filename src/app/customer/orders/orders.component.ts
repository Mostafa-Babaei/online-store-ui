import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paging } from 'src/Models/common/paging';
import { PagingModel } from 'src/Models/common/paging-model';
import { OrderDto } from 'src/Models/order/order-dto';
import { OrderService } from 'src/services/order/order.service';

type NewType = ToastrService;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: OrderDto[];
  dataModel: Paging;

  page: number = 1;
  constructor(private orderService: OrderService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.dataModel = new Paging;
    // this.dataModel.totalPage = 6;
    this.getorders(this.page);
  }

  getorders(pageNum: number) {
    this.orderService.getCustomerOrder(pageNum).subscribe((response) => {
      if (response.isSuccess) {
        this.dataModel = response.data as Paging;
        this.orders = this.dataModel.PageData as OrderDto[];
      } else {
        this.toastr.error(response.message);
      }
    });
  }
  goNextPage() {

  }
  changePage(newPage: number) {
    this.getorders(newPage);
  }
  counter(i: number) {
    return new Array(i);
  }
}
