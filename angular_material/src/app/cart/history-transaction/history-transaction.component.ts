import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-history-transaction',
  templateUrl: './history-transaction.component.html',
  styleUrls: ['./history-transaction.component.css'],
})
export class HistoryTransactionComponent implements OnInit {
  transactions = [];
  displayedColumns: string[] = [
    'order_date',
    'role',
    'order_status',
    'total_price',
  ];

  dataSource = new MatTableDataSource();

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
      this.dataSource = new MatTableDataSource(this.transactions);
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
