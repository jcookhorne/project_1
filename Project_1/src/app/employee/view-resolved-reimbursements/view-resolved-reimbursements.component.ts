import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-view-resolved-reimbursements',
  templateUrl: './view-resolved-reimbursements.component.html',
  styleUrls: ['./view-resolved-reimbursements.component.css']
})
export class ViewResolvedReimbursementsComponent implements OnInit {
  reim: Reimbursement={
    reimbursementId: 0,
	  employeeId: 0,
    reimbursementAmount: 0,
  	reimbursementReason:"",
  	reimbursementDate:"",
	  status:""
   }

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.resolvedReimbursement();
  }
resolvedReimbursement(){
  this.employeeService.resolvedReimbursements().subscribe((response)=>{
    console.log(response);
    this.reim.reimbursementId=response.reimbursementId;
    this.reim.employeeId=response.employeeId;
    this.reim.reimbursementAmount=response.reimbursementAmount;
    this.reim.reimbursementReason=response.reimbursementReason;
    this.reim.reimbursementDate=response.reimbursementDate;
    this.reim.status=response.status;
  });
}




}
