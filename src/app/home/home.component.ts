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
  defualtImageProduct: string;
  homeRequest: HomeRequestDto;
  listOfProduct: ProductDto[];
  listOfBrand: BrandDto[];
  listOfCategory: Category[];

  // finalListForShow: ProductDto[];
  catId: number;
  brandId: number;
  searchText: string;
  ngOnInit(): void {
    this.defualtImageProduct = 'https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp';
    this.homeRequest = new HomeRequestDto;
    this.homeRequest.categoryFilter = 0;
    this.homeRequest.brandFilter = 0;
    this.homeRequest.searchText = "";


    // this.catId = +(this.activeRoute.snapshot.queryParamMap.get('catId') ?? 0);
    // if (this.catId && this.catId > 0) {
    //   this.homeRequest.categoryFilter = this.catId;
    // }

    // this.brandId = +(this.activeRoute.snapshot.queryParamMap.get('brandId') ?? 0);
    // if (this.brandId) {
    //   this.homeRequest.brandFilter = this.brandId;
    // }

    // this.searchText = this.activeRoute.snapshot.queryParamMap.get('searchText') ?? '';
    // if (this.searchText) {
    //   this.homeRequest.searchText = this.searchText;
    // }
    console.log("catId : " + this.catId + " brandId : " + this.brandId + " searchText : " + this.searchText);
    this.activeRoute.queryParams.subscribe((queryPrams) => {
      this.homeRequest.categoryFilter = queryPrams['catId'] ?? 0;
      this.homeRequest.brandFilter = queryPrams['brandId'] ?? 0;
      this.homeRequest.searchText = queryPrams['searchText'];
      if (queryPrams['catId']) {
      }
      if (queryPrams['brandId']) {
      }
      if (queryPrams['searchText']) {
      }
      this.getProductByFilter();
    })
    // this.toastr.success(this.catId.toString());

    //this.getProduct();
  }

  getParams() {
    this.activeRoute.queryParams.subscribe((queryPrams) => {
      debugger;

      console.log("queryParams : " + queryPrams);
    })
  }

  // getAllBrand() {
  //   this.brandService.getAllBrand().subscribe((response) => {
  //     if (response.isSuccess) {
  //       this.listOfBrand = response.data as BrandDto[];
  //     }
  //   });
  // }

  // getAllCategory() {
  //   this.categoryService.getAllCategory().subscribe((response) => {
  //     if (response.isSuccess) {
  //       this.listOfCategory = response.data as Category[];
  //     }
  //   });
  // }


  getProduct(catId?: number) {
    this.productServide.getAllProduct().subscribe((response) => {
      if (response.isSuccess) {
        this.listOfProduct = response.data as ProductDto[];
      }
    });
  }


  getProductByFilter(homeRequest?: HomeRequestDto) {
    this.productServide.getAllProductByFilter(this.homeRequest).subscribe((response) => {
      debugger;
      if (response.isSuccess) {
        let temp: HomeRequestDto = response.data as HomeRequestDto;
        this.listOfProduct = temp.products;
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
        this.cartService.getNumberOfItem();
        this.toastr.success(response.message)
      } else {
        this.toastr.error(response.message)
      }
    })
  }

}
