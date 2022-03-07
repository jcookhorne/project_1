import { Component, OnInit } from '@angular/core';
import { User } from '../User.Model';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   newUser: User ={
     userName: "",
    password :"",
    role :""
   }
  errorMessage!: string;
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.userService.login().subscribe((response)=>{
      console.log(Response);
    });
  }

  validateUser(){
    let returnUser: User = this.userService.validateUser(this.newUser);
    if(returnUser.userName == ""){
        this.errorMessage ="Invalid Credentials";
    } else{
      if(returnUser.role == "manager"){
          //go to manager
          this.router.navigate(['mHome'])
      } else{
        //navigate to employee
        this.router.navigate(['home'])
      }
        console.log("login successful");
    }
  }
}
