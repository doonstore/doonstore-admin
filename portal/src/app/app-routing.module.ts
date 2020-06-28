import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared/guard/auth.guard";


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: SignInComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
