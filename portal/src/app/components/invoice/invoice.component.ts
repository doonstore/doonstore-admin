import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from "../../shared/model/db";

export interface InvoiceData {
    order: Order
}

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
    displayedColumns: string[] = ['id', 'item', 'unitPrice', 'quantity', 'price'];

    constructor(
        public dialogRef: MatDialogRef<InvoiceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: InvoiceData) {
    }

    ngOnInit(): void {
    }

    printInvoice() {
        window.print();
    }
}
