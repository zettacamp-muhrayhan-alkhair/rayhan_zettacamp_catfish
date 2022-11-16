import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink/dist/subsink';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  loginForm = this.fb.group({
    email: this.fb.control(null, Validators.email),
    password: this.fb.control(null, Validators.minLength(6)),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onSubmit(loginForm: any) {
    this.subs.sink = this.loginService
      .getToken(loginForm)
      .subscribe((data: any) => {
        let userData = data.data.Login.user.usertype;
        let userToken = data.data.Login.token;
        if (userToken) {
          localStorage.setItem('userToken', `Bearer ${userToken}`);
          localStorage.setItem('userData', JSON.stringify(userData));
          this.router.navigate(['home']);
        }
      });
    this.loginForm.reset();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
