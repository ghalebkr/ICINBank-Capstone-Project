import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { PaybillsComponent } from './component/paybills/paybills.component';
import { RegisterComponent } from './component/register/register.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  { path: "register", component:RegisterComponent},
  { path: "user", component:UserComponent},
  { path: "admin", component:AdminComponent },
  { path: "paybills", component: PaybillsComponent },
  { path: "transfer", component: TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
