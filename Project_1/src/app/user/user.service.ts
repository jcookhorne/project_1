import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { AuthService } from './auth.service';
import { User } from './User.Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService:AuthService, private http:HttpClient) { }
// to work with HTTP Client, we should include HTTPClientModule in app.module.ts file
  login(userName:String = "", password:String = ""): Observable<Employee>{
  
    return this.http.get<Employee>("http://localhost:7070/api/login/"+ userName + password );
  }




  validateUser(newUser: User): User{
    if(newUser.userName=="admin" && newUser.password == "admin"){
      // user has successfully logged in as an admin
      // 1. store user information in the browser storage
      this.authService.storeUser(newUser);
      // 2. mark that we have logged in 
      this.authService.loggedIn=true;

    }else if(newUser.userName=="customer" && newUser.password == "customer"){
        // user has successfully logged in as an admin
      // 1. store user information in the browser storage
      this.authService.storeUser(newUser);
      // 2. mark that we have logged in 
      this.authService.loggedIn=true;
    }else{
      //invalid credentials
      newUser ={
        userName:"",
        password:""
      }
    } 
    return newUser;

}


}
