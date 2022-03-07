import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-view-resolved-reimbursements',
  templateUrl: './view-resolved-reimbursements.component.html',
  styleUrls: ['./view-resolved-reimbursements.component.css']
})
export class ViewResolvedReimbursementsComponent implements OnInit {
resolved: Reimbursement[] = [];

  constructor(private employeeService:EmployeeService) { }
  reim: Reimbursement={
    reimbursementId: 1,
	  employeeId: 2,
    reimbursementAmount: 700,
  	reimbursementReason:"",
  	reimbursementDate:"",
	  status:""
   }
  ngOnInit(): void {
  }
resolvedReimbursement(){
  this.employeeService.resolvedReimbursements().subscribe((response)=>{
    console.log(Response);
  });
}




}
