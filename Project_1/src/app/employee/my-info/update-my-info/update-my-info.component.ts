import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-update-my-info',
  templateUrl: './update-my-info.component.html',
  styleUrls: ['./update-my-info.component.css']
})
export class UpdateMyInfoComponent implements OnInit {

  constructor() { }
  newEmployee: Employee = {
    employeeId:2,
    firstName:"",
    lastName:"",
    address:"",
    phoneNumber:"",
    username:"",
    password:""
}
  ngOnInit(): void {
  }

}
