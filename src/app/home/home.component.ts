import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandDto } from 'src/Models/brand/brand-dto';
import { Category } from 'src/Models/category/category.model';
import { AddToCart } from 'src/Models/order/add-to-cart';
import { ProductDto } from 'src/Models/product/product-dto';
import { HomeRequestDto } from 'src/Models/Shop/home-request-dto';
import { AccountService } from 'src/services/account/account.service';
import { BrandService } from 'src/services/brand/brand.service';
import { CartService } from 'src/services/cart/cart.service';
import { CategoryService } from 'src/services/category/category.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productServide: ProductService, private router: Router, private accountService: AccountService, private activeRoute: ActivatedRoute,
    private toastr: ToastrService, private categoryService: CategoryService, private brandService: BrandService, private cartService: CartService) { }

  homeRequest: HomeRequestDto;
  listOfProduct: ProductDto[];
  listOfBrand: BrandDto[];
  listOfCategory: Category[];

  finalListForShow: ProductDto[];
  catId: number;

  ngOnInit(): void {
    this.homeRequest = new HomeRequestDto;
    this.catId = this.activeRoute.root.snapshot.params['catId'];
    // this.toastr.success(this.catId.toString());

    // this.activeRoute.params.subscribe((params: Params) => {
    //   this.catId = params['catId'];
    // });
    this.getProduct();
  }

  getAllBrand() {
    this.brandService.getAllBrand().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfBrand = response.data as BrandDto[];
      }
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfCategory = response.data as Category[];
      }
    });
  }

  getProduct(catId?: number) {
    this.productServide.getAllProduct().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfProduct = response.data as ProductDto[];
      }
    });
  }

  addToCart(item: ProductDto) {
    let addtoCart: AddToCart = { ProductId: item.productId, Count: 1 };
   
    // بررسی ورود کاربر
    if (!this.accountService.isLogined()) {
      this.toastr.warning("قبل از ثبت سفارش وارد حساب کاربری خود شوید");
      this.router.navigate(['/Login']);
      return;
    }

    //ثبت در سبد خرید
    this.cartService.addToCart(addtoCart).subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.success(response.message)
      } else {
        this.toastr.error(response.message)
      }
    })
    this.cartService.getNumberOfItem();
  }

}
