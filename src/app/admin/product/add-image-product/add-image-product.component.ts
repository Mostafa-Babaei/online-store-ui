import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-add-image-product',
  templateUrl: './add-image-product.component.html',
  styleUrls: ['./add-image-product.component.css']
})
export class AddImageProductComponent implements OnInit {
  pId: number;
  imageSrc: string = "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp";
  productImage: File;
  constructor(private activeRoute: ActivatedRoute, private toastr: ToastrService, private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    let id = this.activeRoute.params.subscribe((params: Params) => {
      this.pId = +params['id'];
    })
    if (!this.pId) {
      this.toastr.error("محصول یافت نشد");
      this.router.navigate(['/Admin/ListProduct']);
    }
  }

  onchangeImage(event: any) {
    console.log(event);
    let fl = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    }
    reader.readAsDataURL(fl);
    this.productImage = fl;
  }

  uploadImage() {
    this.productService.uploadProductImage(this.productImage, this.pId).subscribe((response) => {
      if (response.isSuccess) {
        this.toastr.info(response.message);
        this.router.navigate(['/Admin/ListProduct']);

      } else {
        this.toastr.error(response.message);
      }
    });
  }

}
