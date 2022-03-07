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
import { ReimbursementsComponent } from './manager/reimbursements/reimbursements.component';
import { AuthGuard } from './user/auth.guard';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const routes: Routes = [
  { path: "header", component: HeaderComponent , canActivate: [AuthGuard]},
  { path: "home", component: HomeComponent ,canActivate: [AuthGuard]},
  { path: "mHome", component: MHomeComponent,canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent,canActivate: [AuthGuard] },
  //These are employee Components //////////////////////////////////////////////////////////
  { path: "e-info", component:  MyInfoComponent },
  { path: "e-request", component: RequestReimbursementComponent ,canActivate: [AuthGuard]},
  { path: "e-view", component: ViewPendingReimbursementsComponent ,canActivate: [AuthGuard]},
  { path: "e-resolved", component: ViewResolvedReimbursementsComponent ,canActivate: [AuthGuard]},
  { path: "update-info", component: UpdateMyInfoComponent ,canActivate: [AuthGuard]},
  
  //////////////////////////////////////////////////////////////////////////////////////////
    //These are manager Components //////////////////////////////////////////////////////////
    {path: "reimbursement",component: ReimbursementsComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
