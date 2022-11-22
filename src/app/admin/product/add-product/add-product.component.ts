import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandDto } from 'src/Models/brand/brand-dto';
import { AddCategoryDto } from 'src/Models/category/add-category-dto.model';
import { Category } from 'src/Models/category/category.model';
import { AddProductDto } from 'src/Models/product/add-product-dto';
import { BrandService } from 'src/services/brand/brand.service';
import { CategoryService } from 'src/services/category/category.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productServide: ProductService, private router: Router,
    private toastr: ToastrService, private categoryService: CategoryService, private brandService: BrandService) { }


  productDto: AddProductDto;
  listOfBrand: BrandDto[];
  listOfCategory: Category[];
  ngOnInit(): void {
    this.productDto = new AddProductDto;
    this.getAllCategory();
    this.getAllBrand();
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

  addProduct() {
    this.productServide.addProduct(this.productDto).subscribe((response) => {
      if (response.isSuccess) {
        this.router.navigate(['ListProduct']);
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
