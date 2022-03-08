import { Injectable } from '@angular/core';
import {User} from './user.model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private http:HttpClient) { }
 
  newUser: User ={
    userName: "",
   password:"",
   role: ""
  }



  Login(userName: String, password:String): Observable<User>   {
    return this.http.get<User>("http://localhost:7070/api/login/"+userName+"/"+password);
  }

  ManagerLogin(userName: String, password:String): Observable<User>   {
    return this.http.get<User>("http://localhost:7070/api/login/"+userName+"/"+password);
  }



  
 validateManager(user: User ): Observable<User>{ 
      this.authService.loggedIn = true;
      return this.http.get<User>("http://localhost:7070/api/login/"+user.userName+"/"+user.password);
  
   }
   validateEmployee(user: Employee ){
    console.log("user dataa:");
    console.log(user);
    return this.http.post<Employee>("http://localhost:7070/api/employee-login", user);
    
 } 
 

  
}

