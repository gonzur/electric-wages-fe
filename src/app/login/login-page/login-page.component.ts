import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  loginGroup: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {

    let formValue = this.loginGroup.value;
    formValue["login"];
    
  }
}
