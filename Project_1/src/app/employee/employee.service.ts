import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from 'date-fns/locale';

import { Observable } from 'rxjs';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Employee } from './employee.model';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http:HttpClient, private userService:UserService) { }
  
  storeEmployeeUser(employee: Employee ): void {
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee))
   
  }
  retrieveEmployeeId(){
    let Id: number= JSON.parse(sessionStorage.getItem('employeeId')||'{}');
    console.log("retrieve employee log");
    console.log(id);
     return Id;
     
   }
//this.sessionStorage.setItem(employeeId:)

  
 
 employeeInfo(employeeId:Employee = JSON.parse(sessionStorage.getItem('employeeId')||'{}')) {
   console.log(employeeId);
   return this.http.get<Employee>("http://localhost:7070/api/employee-Info/"+ employeeId);
 }
  resolvedReimbursements(employeeId: number = JSON.parse(sessionStorage.getItem('employeeId')||'{}')): Observable<Reimbursement>{
    return this.http.get<Reimbursement>("http://localhost:7070/api/view-resolved/"+employeeId);
  }

  pendingReimbursements(employeeId: number= JSON.parse(sessionStorage.getItem('employeeId')||'{}')): Observable<Reimbursement>{
    return this.http.get<Reimbursement>("http://localhost:7070/api/view-pending/"+employeeId);

  }

}
