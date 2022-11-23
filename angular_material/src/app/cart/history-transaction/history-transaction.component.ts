import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-history-transaction',
  templateUrl: './history-transaction.component.html',
  styleUrls: ['./history-transaction.component.css'],
})
export class HistoryTransactionComponent implements OnInit {
  transactions = [];
  constructor(
    public dialogRef: MatDialogRef<HistoryTransactionComponent>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }

  onClose() {
    this.dialogRef.close();
  }

  getAllTransactions() {
    this.cartService.getHistoryTransaction().subscribe((data: any) => {
      this.transactions = data.data.GetAllTransaction.data.transaction_data;
      console.log(this.transactions);
    });
  }
}

export function openHistoryTransactionDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = matDialog.open(HistoryTransactionComponent, config);

  return dialogRef.afterClosed();
}
