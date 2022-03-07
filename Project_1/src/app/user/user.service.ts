import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from './user.model';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

 validateUser(newUser: User): User{
   if(newUser.role == "manager"&& newUser.userName =="manager"&& newUser.password=="manager"){
      this.authService.storeUser(newUser)
      this.authService.loggedIn = true;
  
   }else if(newUser.role == "emp"&& newUser.userName =="emp"&& newUser.password=="emp"){
    this.authService.storeUser(newUser)
    this.authService.loggedIn=true;
 } else{

  newUser = {
    userName: "",
    password: "",
    role: ""
  }


 }
 return newUser;
 }
  
}

