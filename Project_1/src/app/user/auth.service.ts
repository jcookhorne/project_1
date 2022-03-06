import { Injectable } from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//purpose of this service is to store and get user infor form the browser
  constructor() { }
loggedIn: boolean = false;
  storeUser(user: User): void {
    sessionStorage.setItem("userInfo", JSON.stringify(user))
  }
  retrieveUser(): User{
   let data: any= sessionStorage.getItem("userInfo");
    return JSON.parse(data);
  }

  destroyUser(): void{
    sessionStorage.removeItem("userInfo");
  }
}
