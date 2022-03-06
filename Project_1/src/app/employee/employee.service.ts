import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private employee:Employee) { }

  employeeInfo(employeeId:number){
    console.log(employeeId)

  }
}
