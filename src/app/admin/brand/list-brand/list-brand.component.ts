import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/services/brand/brand.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {
  constructor(private brandService: BrandService, private router: Router,
    private toastr: ToastrService) { }

  listOfBrand: any;
  ngOnInit(): void {
    this.getAllBrand()
  }
  getAllBrand() {
    this.brandService.getAllBrand().subscribe((Response) => {
      console.log(Response);
      if (Response.isSuccess) {
        this.listOfBrand = Response.data;
        console.log(this.listOfBrand);
      }
    })
  }
  removeBrand(id: number) {
    this.brandService.deleteBrand(id).subscribe((response) => {
      if (response.isSuccess) {
        this.getAllBrand();
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    })
  }

}



