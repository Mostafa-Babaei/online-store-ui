import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/category/category.model';
import { CategoryService } from 'src/services/category/category.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  menu: Category[];
  ngOnInit(): void {
    this.getMneu();
  }
  getMneu() {
    this.categoryService.getAllCategory().subscribe((response) => {
      if (response.isSuccess) {
        this.menu=response.data as Category[];
      } 
    });
  }
}
