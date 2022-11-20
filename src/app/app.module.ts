import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './admin/product/create/create.component';
import { LoadingComponent } from './share/loading/loading.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { EditComponent } from './admin/category/edit/edit.component';
import { HeaderComponent } from './share/header/header.component';
import { MenuComponent } from './share/menu/menu.component';
import { FooterComponent } from './share/footer/footer.component';
import { AuthPartialComponent } from './share/auth-partial/auth-partial.component';
import { NotfoundComponent } from './share/notfound/notfound.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';

import { AccountService } from 'src/services/account/account.service';
import { BrowserStorageService } from 'src/services/share/browser-storage.service'
import { CustomInterceptorService } from 'src/services/custom-interceptor.service';
import { CategoryService } from 'src/services/category/category.service';
import { ListBrandComponent } from './admin/brand/list-brand/list-brand.component';
import { AddBrandComponent } from './admin/brand/add-brand/add-brand.component';


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
    CreateComponent,
    LoadingComponent,
    ListCategoryComponent,
    ListBrandComponent,
    AddBrandComponent
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
