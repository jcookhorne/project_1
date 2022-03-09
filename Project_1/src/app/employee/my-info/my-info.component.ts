
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import {Employee} from '../employee.model'
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
   newEmployee: Employee = {
    employeeId : 0,
    employeeFirstName : "",
    employeeLastName : "",
    employeeAddress : "",
    employeePhoneNumber : "",
    employeeUserName : "",
    employeePassword : ""
  }
  constructor(private router:Router, private employeeService:EmployeeService) { }
  
 
  ngOnInit(): void {
    this.employeeService.employeeInfo().subscribe((response)=>{
      console.log("My Info response")
      console.log(response);
      this.newEmployee.employeeId = response.employeeId;
      this.newEmployee.employeeFirstName = response.employeeFirstName;
      this.newEmployee.employeeLastName = response.employeeLastName;
      this.newEmployee.employeeAddress = response.employeeAddress;
      this.newEmployee.employeePhoneNumber = response.employeePhoneNumber;
      this.newEmployee.employeeUserName = response.employeeUserName;
      this.newEmployee.employeePassword = response.employeePassword;
    })
  }

  updateInfo(){
    this.router.navigate(['update-info']);
  }


  


  }

 


