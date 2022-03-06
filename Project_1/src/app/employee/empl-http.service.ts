import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmplHttpService {

  constructor(private http:HttpClient) { }

  employeeInfo(): Observable<Employee>   {
    return this.http.get<Employee>("http://localhost:7070/api/employee-Info/");
  }






}
