import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-view-pending-reimbursements',
  templateUrl: './view-pending-reimbursements.component.html',
  styleUrls: ['./view-pending-reimbursements.component.css']
})
export class ViewPendingReimbursementsComponent implements OnInit {
  reim: Reimbursement={
    reimbursementId: 0,
	  employeeId: 0,
    reimbursementAmount: 0,
  	reimbursementReason:"",
  	reimbursementDate:"",
	  status:""
   }
  constructor(private employeeService:EmployeeService) { }
  allReimbursements: Reimbursement[] = [];
  ngOnInit(): void {
    this.pendingReimbursements();
  }
  pendingReimbursements(){
    this.employeeService.pendingReimbursements().subscribe((response)=>{
      console.log(response);
      this.reim = response;
    });
  }
 

}
