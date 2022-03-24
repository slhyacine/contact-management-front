import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from 'src/app/models/authentification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  inputType = 'password';
  visible = false;

  constructor(public loginService: LoginService,
              private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    localStorage.clear;
  }

  submit() {
    const loginValues = this.form.getRawValue();
    this.loginService.login(new Login(loginValues));
  }

}
