import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  LoginModule } from "./login/login.module";
import { LoginPageComponent } from "./login/login-page/login-page.component";

const routes: Routes = [
  { path: "", component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
