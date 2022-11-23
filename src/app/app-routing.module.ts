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
import { ChangePasswordComponent } from './customer/change-password/change-password.component';
import { OrdersComponent } from './customer/orders/orders.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { CustomerHeaderComponent } from './_layout/customer-header/customer-header.component';
import { CustomerLayoutComponent } from './_layout/customer-layout/customer-layout.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';

const routes: Routes = [


  //Home routes 
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: 'full' },
      { path: "Home/:catId", component: HomeComponent },

      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "404", component: NotfoundComponent },
      { path: "forget-password", component: ForgetPasswordComponent }

    ]
  },

  // Customer routes 
  {
    path: 'CustomerDashboard',
    component: CustomerLayoutComponent,
    children: [
      { path: "Profile", component: ProfileComponent },
      { path: "OrdersOfCustomer", component: OrdersComponent },
      { path: "ChangePassword", component: ChangePasswordComponent },
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
      { path: "Category/:id/Edit", component: AddCategoryComponent },

      { path: "ListBrand", component: ListBrandComponent },
      { path: "AddBrand", component: AddBrandComponent },
      { path: "Brand/:id/Edit", component: AddCategoryComponent },


      { path: "ListProduct", component: ListProductComponent },
      { path: "AddProduct", component: AddProductComponent },
      { path: "Product/:id/Edit", component: AddCategoryComponent },

      { path: "ListRole", component: ListRoleComponent },
      { path: "ListUser", component: ListUserComponent }

    ]
  },


  { path: "**", redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
