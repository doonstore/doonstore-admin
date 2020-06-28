import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Order } from "../../shared/model/db";
import { Observable } from "rxjs";
import { InvoiceComponent } from "../invoice/invoice.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    itemCollection: AngularFirestoreCollection<Order>;
    items: Observable<Order[]>
    data: Order[]
    displayedColumns: string[]

    constructor(
        public afs: AngularFirestore,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.itemCollection = this.afs.collection<Order>("orders");
        this.items = this.itemCollection.valueChanges();
        this.items.subscribe(value => {
            if (this.data) {
                this.data.concat(value);
            } else {
                this.data = value;
            }
        });
        this.displayedColumns = ['id', 'date', 'address', 'total'];
    }

    openDialog(order: Order): void {
        const dialogRef = this.dialog.open(InvoiceComponent, {
            width: '75%',
            data: { order: order }
        });
    }
}
