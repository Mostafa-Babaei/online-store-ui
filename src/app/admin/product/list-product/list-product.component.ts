import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDto } from 'src/Models/product/product-dto';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listOfProduct: ProductDto[];
  constructor(private productServide: ProductService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productServide.getAllProduct().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfProduct = response.data as ProductDto[]
      } else {
        this.toastr.error(response.message);
      }
    })
  }

  removeProduct(id: number) {
    this.productServide.deleteProduct(id).subscribe((response) => {
      if (response.isSuccess) {
        this.listOfProduct = response.data as ProductDto[];
        this.getAllProduct();
      } else {
        this.toastr.error(response.message);
      }
    })
  }

  changeStateProduct(id:number){
    this.productServide.changeStateProduct(id).subscribe((response) => {
      if (response.isSuccess) {
        this.listOfProduct = response.data as ProductDto[];
        this.getAllProduct();
      } else {
        this.toastr.error(response.message);
      }
    })
  }

}
