import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paging } from 'src/Models/common/paging';
import { OrderDto } from 'src/Models/order/order-dto';
import { OrderService } from 'src/services/order/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  orders: OrderDto[];
  dataModel: Paging;

  page: number = 1;
  constructor(private orderService: OrderService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataModel = new Paging;
    this.dataModel.totalPage = 6;
    this.getorders(this.page);
  }

  getorders(pageNum: number) {
    this.orderService.getCustomerOrder(pageNum).subscribe((response) => {
      if (response.isSuccess) {
        this.dataModel = response.data as Paging;
        this.orders = this.dataModel.pageData as OrderDto[];
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
