import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './common/login/login.component';


const appRoute:Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'employee',
    loadChildren:'src/app/container/employee/employee.module#EmployeeModule'
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo: '/login'
  }

]








@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
