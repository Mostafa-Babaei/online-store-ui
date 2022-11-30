import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddCategoryDto } from 'src/Models/category/add-category-dto.model';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategory: AddCategoryDto;
  constructor(private categoryService: CategoryService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addCategory = new AddCategoryDto;
    this.addCategory.categoryName = "test";
    this.addCategory.isEnable = true;
  }
  addNewCategory() {
    this.categoryService.addCategory(this.addCategory).subscribe((response) => {
      console.log(response);
      if (response.isSuccess) {
        this.toastr.success(response.message);
        this.router.navigate(['/Admin/ListCategory']);
      } else {
        this.toastr.error(response.message);
      }
    });
  }
}
