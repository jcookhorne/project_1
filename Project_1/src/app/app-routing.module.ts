import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';
import { HeaderComponent } from './header/header.component';
import { MHomeComponent } from './manager/m-home/m-home.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

//Employee Ports /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { MyInfoComponent } from './employee/my-info/my-info.component';
import { RequestReimbursementComponent } from './employee/request-reimbursement/request-reimbursement.component';
import { ViewPendingReimbursementsComponent } from './employee/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewResolvedReimbursementsComponent } from './employee/view-resolved-reimbursements/view-resolved-reimbursements.component';
import { UpdateMyInfoComponent } from './employee/my-info/update-my-info/update-my-info.component';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "home", component: HomeComponent },
  { path: "mHome", component: MHomeComponent },
  { path: "login", component: LoginComponent },
  //These are employee Components //////////////////////////////////////////////////////////
  { path: "e-info", component:  MyInfoComponent },
  { path: "e-request", component: RequestReimbursementComponent },
  { path: "e-view", component: ViewPendingReimbursementsComponent },
  { path: "e-resolved", component: ViewResolvedReimbursementsComponent },
  { path: "update-info", component: UpdateMyInfoComponent }

  //////////////////////////////////////////////////////////////////////////////////////////
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
