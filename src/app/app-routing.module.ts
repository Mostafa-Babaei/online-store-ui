import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddBrandComponent } from './admin/brand/add-brand/add-brand.component';
import { ListBrandComponent } from './admin/brand/list-brand/list-brand.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ListRoleComponent } from './admin/role/list-role/list-role.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';

const routes: Routes = [


  // Main routes 
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "Home", component: HomeComponent },

      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "forget-password", component: ForgetPasswordComponent }

    ]
  },

  // Admin routes 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [

      { path: "Dashboard", component: DashboardComponent },
      { path: "ListCategory", component: ListCategoryComponent },
      { path: "AddCategory", component: AddCategoryComponent },

      { path: "ListBrand", component: ListBrandComponent },
      { path: "AddBrand", component: AddBrandComponent },


      { path: "ListProduct", component: ListProductComponent },
      { path: "AddProduct", component: AddProductComponent },

      { path: "ListRole", component: ListRoleComponent },
      { path: "ListUser", component: ListUserComponent }

    ]
  },

  { path: "404", component: NotfoundComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
