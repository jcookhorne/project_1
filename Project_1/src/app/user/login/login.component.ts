import { Component, OnInit } from '@angular/core';
import { User } from '../User.Model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User ={
    userName: "",
    password :"",
  }
  errorMessage!: string;
  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  validateUser(){
    
    let returnUser: User =  this.userService.validateUser(this.newUser);
 if (returnUser.userName == ""){
   //invalid credentials
   this.errorMessage = "Invalid Credentials!!"
 }else{
 
 }
 console.log("Login Was Successful")
   }
 
}
