
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Employee} from '../employee.model'
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  constructor(private router:Router, private employeeService:EmployeeService) { }
  employeeTest: Employee[] = [];
  ngOnInit(): void {
    this.employeeService.employeeInfo().subscribe((response)=>{
      console.log(Response);
    })
  }

  updateInfo(){
    this.router.navigate(['update-info']);
  }


  employee: Employee = {
      employeeId:2,
      firstName:"",
      lastName:"",
      address:"",
      phoneNumber:"",
      username:"",
      password:""
  }


  }

 


