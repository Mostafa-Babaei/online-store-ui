import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandDto } from 'src/Models/brand/brand-dto';
import { Category } from 'src/Models/category/category.model';
import { ProductDto } from 'src/Models/product/product-dto';
import { HomeRequestDto } from 'src/Models/Shop/home-request-dto';
import { BrandService } from 'src/services/brand/brand.service';
import { CategoryService } from 'src/services/category/category.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productServide: ProductService, private router: Router,
    private toastr: ToastrService, private categoryService: CategoryService, private brandService: BrandService) { }

  homeRequest: HomeRequestDto;
  listOfProduct: ProductDto[];
  listOfBrand: BrandDto[];
  listOfCategory: Category[];

  finalListForShow: ProductDto[];

  ngOnInit(): void {
    this.homeRequest = new HomeRequestDto;
  }

  getAllBrand() {
    this.brandService.getAllBrand().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfBrand = response.data as BrandDto[];
        console.log(this.listOfBrand);
      }
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfCategory = response.data as Category[];
        console.log(this.listOfCategory);
      }
    });
  }

  getProduct(catId?: number) {
    this.productServide.getAllProduct().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfProduct = response.data as ProductDto[];
        console.log(this.listOfCategory);
      }
    });
  }

}
