import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm = this.fb.group({
    _id: this.fb.control(null, [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    firstname: this.fb.control(null, Validators.required),
    lastname: this.fb.control(null, Validators.required),
    gender: this.fb.control(null, Validators.required),
    birth: this.fb.control(new Date(), Validators.required),
    civility: this.fb.control(null, Validators.required),
  });
  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UserFormComponent>
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.matDialogRef.close();
  }

  onAdd() {
    if (this.userForm.valid) {
      this.matDialogRef.close(this.userForm.value);
      Swal.fire('User Added', 'You just Added the user', 'success');
    } else {
      Swal.fire('User Added Error', 'Please input the valid data', 'warning');
    }
  }
}

export function openAddUserDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = matDialog.open(UserFormComponent, config);

  return dialogRef.afterClosed();
}
