import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from "./shared/services/auth.service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { OrderListComponent } from './components/order-list/order-list.component';
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { InvoiceComponent } from './components/invoice/invoice.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        DashboardComponent,
        OrderListComponent,
        InvoiceComponent,
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firestore),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MatDialogModule,
        MatTableModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
