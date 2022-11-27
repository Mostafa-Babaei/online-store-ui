import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AccountService } from 'src/services/account/account.service';
import { BrowserStorageService } from 'src/services/share/browser-storage.service'
import { CustomInterceptorService } from 'src/services/custom-interceptor.service';
import { CategoryService } from 'src/services/category/category.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { EditComponent } from './admin/category/edit/edit.component';
import { LoadingComponent } from './share/loading/loading.component';
import { HeaderComponent } from './share/header/header.component';
import { MenuComponent } from './share/menu/menu.component';
import { FooterComponent } from './share/footer/footer.component';
import { AuthPartialComponent } from './share/auth-partial/auth-partial.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { LoginComponent } from './account/login/login.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { RegisterComponent } from './account/register/register.component';
import { ListBrandComponent } from './admin/brand/list-brand/list-brand.component';
import { AddBrandComponent } from './admin/brand/add-brand/add-brand.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { AddProductComponent } from './admin/product/add-product/add-product.component';
import { ListUserComponent } from './admin/user/list-user/list-user.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { MainHeaderComponent } from './_layout/main-header/main-header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LogoutComponent } from './account/logout/logout.component';
import { ChangePasswordComponent } from './customer/change-password/change-password.component';
import { CustomerLayoutComponent } from './_layout/customer-layout/customer-layout.component';
import { CustomerHeaderComponent } from './_layout/customer-header/customer-header.component';
import { ListRoleComponent } from './admin/role/list-role/list-role.component';
import { AccessDeniedComponent } from './share/accessDenied/access-denied/access-denied.component';
import { CartComponent } from './home/cart/cart.component';
import { InvoiceComponent } from './home/invoice/invoice.component';
import { OrderOfCustomerComponent } from './customer/order-of-customer/order-of-customer.component';
import { ListOrderComponent } from './admin/order/list-order/list-order.component';
import { PaymentComponent } from './home/payment/payment.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { CartHeaderComponent } from './share/cart/cart-header/cart-header.component';
import { AddNewUserComponent } from './admin/user/add-new-user/add-new-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    EditComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AuthPartialComponent,
    NotfoundComponent,
    LoadingComponent,
    ListCategoryComponent,
    ListBrandComponent,
    AddBrandComponent,
    AddCategoryComponent,
    ListProductComponent,
    AddProductComponent,
    ListUserComponent,
    AdminLayoutComponent,
    MainLayoutComponent,
    AdminHeaderComponent,
    MainHeaderComponent,
    DashboardComponent,
    LogoutComponent,
    ChangePasswordComponent,
    CustomerLayoutComponent,
    CustomerHeaderComponent,
    ListRoleComponent,
    AccessDeniedComponent,
    CartComponent,
    InvoiceComponent,
    OrderOfCustomerComponent,
    ProfileComponent,
    ListOrderComponent,
    PaymentComponent,
    CartHeaderComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AccountService,
    CategoryService,
    BrowserStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
