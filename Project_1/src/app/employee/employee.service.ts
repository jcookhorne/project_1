import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http:HttpClient) { }

  employeeInfo(employeeId: number=2): Observable<Employee>   {
    return this.http.get<Employee>("http://localhost:7070/api/employee-Info/"+employeeId);
  }
  
  resolvedReimbursements(employeeId: number=2): Observable<Reimbursement>{
    return this.http.get<Reimbursement>("http://localhost:7070/api/view-resolved/"+employeeId);
  }

  pendingReimbursements(employeeId: number=2): Observable<Reimbursement>{
    return this.http.get<Reimbursement>("http://localhost:7070/api/view-pending/"+employeeId);

  }

}
