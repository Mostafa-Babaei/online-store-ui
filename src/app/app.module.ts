import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './admin/user/list/list.component';
import { AddComponent } from './admin/category/add/add.component';
import { EditComponent } from './admin/category/edit/edit.component';
import { HeaderComponent } from './share/header/header.component';
import { MenuComponent } from './share/menu/menu.component';
import { FooterComponent } from './share/footer/footer.component';
import { AuthPartialComponent } from './share/auth-partial/auth-partial.component';
import { NotfoundComponent } from './share/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AuthPartialComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
