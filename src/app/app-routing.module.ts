import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AddBrandComponent } from './admin/brand/add-brand/add-brand.component';
import { ListBrandComponent } from './admin/brand/list-brand/list-brand.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './share/notfound/notfound.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forget-password", component: ForgetPasswordComponent },

  { path: "ListCategory", component: ListCategoryComponent },
  { path: "AddCategory", component: AddCategoryComponent },

  { path: "ListBrand", component: ListBrandComponent },
  { path: "AddBrand", component: AddBrandComponent },

  { path: "404", component: NotfoundComponent },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
