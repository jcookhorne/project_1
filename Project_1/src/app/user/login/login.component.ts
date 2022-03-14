import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.model';
import { AuthService } from '../auth.service';
import { Manager } from 'src/app/manager/manager.modue';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  newUser: User = {
    userName: "",
    password: "",
    role: ""
  }
  errorMessage: String = "";
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {

  }
  validateUser() {

    if (this.newUser.role == "Employee") {
      let newEmployee: Employee = {
        employeeId : 0,
        employeeFirstName : "",
        employeeLastName : "",
        employeeEmail : "",
        employeeAddress : "",
        employeePhoneNumber : "",
        employeeUserName : this.newUser.userName,
        employeePassword : this.newUser.password
      }
      this.userService.validateEmployee(newEmployee).subscribe((response) => {
        sessionStorage.setItem('user', JSON.stringify(response));
        sessionStorage.setItem("id", JSON.stringify(response.employeeId))

        if (response.employeeFirstName == "") {
          //login failed
          this.errorMessage = "Invalid Credentials!!";

        } else {
          //login success
          this.authService.loggedIn = true;
          this.authService.employeeRole = true;
          this.router.navigate(['home'])
        }
      })
    } else if (this.newUser.role == "Manager") {
      let newManager: Manager = {
        managerId: 0,
        firstName: "",
        lastName: "",
        address: "",
        contact: "",
        email: "",
        userName: this.newUser.userName,
        password: this.newUser.password,
      
      }
        this.userService.validateManager(newManager).subscribe((response) => {

          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem("id", JSON.stringify(response.managerId))
          
          if (response.firstName == "") {
            //login failed
            this.errorMessage = "Invalid Credentials!!";
  
          } else{

          
          this.authService.loggedIn = true;
          this.authService.managerRole = true;
          this.router.navigate(['mhome'])
        }}

      
      
      );
    }
  }
}