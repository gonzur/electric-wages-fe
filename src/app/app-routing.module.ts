import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  LoginModule } from "./login/login.module";
import { ReportsModule } from "./reports/reports.module";
import { ReportsPageComponent } from "./reports/reports-page/reports-page.component";
import { LoginPageComponent } from "./login/login-page/login-page.component";

const routes: Routes = [
  { path: "", component: LoginPageComponent},
  { path:"reports", component: ReportsPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    LoginModule,
    ReportsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
