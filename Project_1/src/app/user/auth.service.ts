import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.model';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//purpose of this service is to store and get user infor form the browser
  constructor() { }
loggedIn: boolean = false;
employeeRole: boolean = false;
managerRole: boolean = false;
  storeEmployeeUser(employee: Employee ): void {
    sessionStorage.setItem("employeeInfo", JSON.stringify(employee))
   
  }
  retrieveEmployeeUser(): Employee{
   let data: any= sessionStorage.getItem("employeeInfo");
    return JSON.parse(data);
    
  }
 


  destroyEmployeeUser(): void{
    sessionStorage.removeItem("employeeInfo");
  }  
  
  }

