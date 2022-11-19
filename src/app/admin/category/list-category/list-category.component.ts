import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/Models/category/category.model';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router,
    private toastr: ToastrService) { }

  listOfCategory: any;
  ngOnInit(): void {
    this.getAllCategory()
  }
  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((Response) => {
      console.log(Response);
      if (Response.isSuccess) {
        this.listOfCategory = Response.data;
        console.log(this.listOfCategory);
      }
    })
  }
  removeCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe((response) => {
      if (response.isSuccess) {
        this.getAllCategory();
        this.toastr.success(response.message);
      } else {
        this.toastr.error(response.message);
      }
    })
  }
}
