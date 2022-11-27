import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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
    'role',
    'order_date',
    'order_status',
    'total_price',
  ];

  pageEvent: any;
  pageSize: number = 3;
  pageIndex: number = 0;
  historyLength: number;

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
    this.cartService
      .getHistoryTransaction(this.pageIndex, this.pageSize)
      .subscribe((data: any) => {
        this.transactions = data?.data?.transaction_data;
        this.historyLength = data?.data?.info_page[0]?.count;
        this.dataSource = new MatTableDataSource(this.transactions);
      });
  }

  indexingPage(event: PageEvent): any {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllTransactions();
  }
}

export function openHistoryTransactionDialog(matDialog: MatDialog) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  const dialogRef = matDialog.open(HistoryTransactionComponent, config);

  return dialogRef.afterClosed();
}
