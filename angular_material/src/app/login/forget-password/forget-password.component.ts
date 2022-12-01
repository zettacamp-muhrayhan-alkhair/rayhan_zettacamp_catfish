import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  emailForm = this.fb.group({
    email: this.fb.control('', [
      Validators.email,
      Validators.required,
      Validators.min(5),
    ]),
  });
  passwordForm = this.fb.group({
    code: this.fb.control('', [Validators.required, Validators.min(4)]),
    password: this.fb.control('', [Validators.required, Validators.min(8)]),
  });
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ForgetPasswordComponent>,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onGetCode(data: any) {
    this.loginService.getVerificationCode(data).subscribe((value: any) => {});
  }

  onClose() {
    this.dialogRef.close();
  }

  onShowPassword(event: any) {
    const password = document.getElementById('newPassword') as HTMLInputElement;
    if (event.checked === true) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  onSubmit(data: any) {
    const value = { ...data, email: this.emailForm.value.email };
    this.dialogRef.close(value);
  }
}

export function openForgetPasswordDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;
  config.width = '500px';

  const dialogRef = matDialog.open(ForgetPasswordComponent, config);

  return dialogRef.afterClosed();
}
