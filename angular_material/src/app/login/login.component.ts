import { Component, OnInit, OnDestroy } from '@angular/core';
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
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('data', '');
    localStorage.setItem('role', '');
  }

  onSubmit(value: any) {
    console.log('seb', value);
    this.loginService.getAuthorization(value).subscribe(
      (val: any) => {
        const token = val?.data?.Login?.token;
        const data = val?.data?.Login?.user?.usertype;
        const role = val?.data?.Login?.user?.role;
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('role', JSON.stringify(role));

        Swal.fire({
          title: 'You have logged in',
          text: val?.data?.Login?.message,
          icon: 'success',
        }).then(() => {
          this.router.navigate(['home']).then(() => {
            window.location.reload();
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
