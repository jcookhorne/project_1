import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-view-pending-reimbursements',
  templateUrl: './view-pending-reimbursements.component.html',
  styleUrls: ['./view-pending-reimbursements.component.css']
})
export class ViewPendingReimbursementsComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  allReimbursements: Reimbursement[] = [];
  ngOnInit(): void {
    this.pendingReimbursements();
  }
  pendingReimbursements(){
    this.employeeService.pendingReimbursements().subscribe((response)=>{
      console.log(Response);
      
    });
  }
   reim: Reimbursement={
    reimbursementId: 1,
	  employeeId: 2,
    reimbursementAmount: 700,
  	reimbursementReason:"",
  	reimbursementDate:"",
	  status:""
   }

}
