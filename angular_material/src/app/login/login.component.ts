import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { SubSink } from 'subsink/dist/subsink';
import Swal from 'sweetalert2';
import { AppComponent } from '../app.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private subs = new SubSink();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('data', '');
    localStorage.setItem('role', '');
  }

  onShowPassword(event: any) {
    let password = document.getElementById('password') as HTMLInputElement;
    if (event.checked === true) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  onSubmit(value: any) {
    this.loginService.getAuthorization(value).subscribe(
      (val: any) => {
        let token: any;
        let data: any;
        let role: any;
        this.loginService
          .getAuthorization(this.loginForm.value)
          .subscribe((val: any) => {
            token = val?.data?.Login?.token;
            data = val?.data?.Login?.user?.usertype;
            role = val?.data?.Login?.user?.role;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('data', JSON.stringify(data));
            localStorage.setItem('role', JSON.stringify(role));
          });
        Swal.fire({
          title: 'You have logged in',
          text: val?.data?.Login?.message,
          icon: 'success',
        }).then(() => {
          this.router.navigate(['home']).then(() => {
            if (role === 'Admin') {
              this.appComponent.isAdmin = true;
            } else {
              this.appComponent.isCustomer = true;
            }
          });
        });
      },
      (err) => {
        Swal.fire({
          title: 'Wrong input',
          text: err?.message,
          icon: 'error',
        });
      }
    );
  }
}
