import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { NewLoginService } from './new-login.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css'],
})
export class NewLoginComponent implements OnInit {
  private subs = new SubSink();

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private fb: FormBuilder,
    private newLoginService: NewLoginService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.newLoginService
      .getDataLogin(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
