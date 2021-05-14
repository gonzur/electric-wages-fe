import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule
  ]
})
export class LoginModule { }
