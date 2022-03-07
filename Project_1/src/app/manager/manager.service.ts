import { Injectable } from '@angular/core';
import {Requests} from './requests.model'
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
   allPending: Requests[]= [
   {
        reimbursementId: 3,
        employeeId: 4,
        reimbursementAmount: 500,
        reimbursementReason: "flu",
        status: "pending",
        reimbursementDate: "11/4/21"
      },
       {
        reimbursementId: 4,
        employeeId: 5,
        reimbursementAmount: 80,
        reimbursementReason: "flat tire",
        status: "pending",
        reimbursementDate: "10/4/22"
      },
      {
        reimbursementId: 5,
        employeeId: 6,
        reimbursementAmount: 5000,
        reimbursementReason: "I want a new car",
        status: "pending",
        reimbursementDate: "12/1/22"
      }
    ]

  constructor() { }

  fetchAllPending(): Requests[] {
    return this.allPending

  }


  
}
