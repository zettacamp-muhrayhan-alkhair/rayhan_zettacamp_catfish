import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogClose,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { StockManagementService } from '../stock-management.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css'],
})
export class StockFormComponent implements OnInit {
  stockForm = this.fb.group({
    name: this.fb.control(null, Validators.required),
    stock: this.fb.control(null, Validators.required),
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StockFormComponent>,
    private stockManagementService: StockManagementService
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close();
  }

  onAdd() {
    if (this.stockForm.valid) {
      this.dialogRef.close(this.stockForm.value);
      console.log(this.stockForm.value);
    }
  }
}

export function openAddStockDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = matDialog.open(StockFormComponent, config);

  return dialogRef.afterClosed();
}
