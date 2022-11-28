import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddBrandDto } from 'src/Models/brand/add-brand-dto';
import { BrandService } from 'src/services/brand/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  addBrand: AddBrandDto;
  constructor(private brandService: BrandService, private router: Router,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.addBrand = new AddBrandDto;
  }

  addNewBrand() {
    console.log(this.addBrand);
    this.brandService.addBrand(this.addBrand).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.router.navigate(['/ListBrand']);
      } else {
        this.toastr.error(response.message);
      }
    });
  }
  
}
