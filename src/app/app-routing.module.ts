import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from 'src/services/guard/admin-guard.service';
import { CustomerGuardService } from 'src/services/guard/customer-guard.service';
import { LoginGuardService } from 'src/services/guard/login-guard.service';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddBrandComponent } from './admin/brand/add-brand/add-brand.component';
import { ListBrandComponent } from './admin/brand/list-brand/list-brand.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListOrderComponent } from './admin/order/list-order/list-order.component';
import { AddImageProductComponent } from './admin/product/add-image-product/add-image-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ListRoleComponent } from './admin/role/list-role/list-role.component';
import { AddNewUserComponent } from './admin/user/add-new-user/add-new-user.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './customer/change-password/change-password.component';
import { OrderOfCustomerComponent } from './customer/order-of-customer/order-of-customer.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './home/invoice/invoice.component';
import { PaymentComponent } from './home/payment/payment.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { AccessDeniedComponent } from './share/accessDenied/access-denied/access-denied.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from './_layout/customer-layout/customer-layout.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';

const routes: Routes = [


  //Home routes 
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: 'full' },
      { path: "Home", component: HomeComponent },
      // { path: "Home/:catId", component: HomeComponent },
      { path: "AccessDenied", component: AccessDeniedComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "404", component: NotfoundComponent },
      { path: "paymentOrder", component: PaymentComponent},
      { path: "productDetails/:id", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent, canActivate: [LoginGuardService] },
      { path: "invoice", component: InvoiceComponent, canActivate: [LoginGuardService] },
      { path: "forget-password", component: ForgetPasswordComponent }

    ]
  },

  // Customer routes 
  {
    path: 'CustomerPanel',
    component: CustomerLayoutComponent,
    //  canActivateChild: [LoginGuardService, CustomerGuardService],
    children: [
      { path: "Profile", component: ProfileComponent },
      { path: "OrdersOfCustomer", component: OrderOfCustomerComponent },
      { path: "ChangePassword", component: ChangePasswordComponent },
      { path: "Invoice", component: InvoiceComponent }
    ]
  },


  // Admin routes 
  {
    path: 'Admin',
    component: AdminLayoutComponent,
    canActivateChild: [AdminGuardService],
    children: [

      { path: "Dashboard", component: DashboardComponent },

      { path: "ListCategory", component: ListCategoryComponent },
      { path: "AddCategory", component: AddCategoryComponent },
      { path: "Category/:id/Edit", component: AddCategoryComponent },

      { path: "ListBrand", component: ListBrandComponent },
      { path: "AddBrand", component: AddBrandComponent },
      { path: "Brand/:id/Edit", component: AddCategoryComponent },

      { path: "ListOrder", component: ListOrderComponent },

      { path: "ListProduct", component: ListProductComponent },
      { path: "AddProduct", component: AddProductComponent },
      { path: "AddImageProduct/:id", component: AddImageProductComponent },
      { path: "Product/:id/Edit", component: AddCategoryComponent },

      { path: "ListRole", component: ListRoleComponent },
      { path: "AddUser", component: AddNewUserComponent },
      { path: "EditUser/:id", component: EditUserComponent },
      { path: "ListUser", component: ListUserComponent }

    ]
  },

  // { path: "**", redirectTo: '404' }
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
