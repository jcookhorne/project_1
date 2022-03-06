import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmplHttpService } from '../empl-http.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  constructor(private router:Router, private emplHttpService : EmplHttpService) { }

  ngOnInit(): void {
    this.emplHttpService.employeeInfo().subscribe((response)=>{
      console.log(Response);
    })
  }
  updateInfo(){
    this.router.navigate(['update-info']);
  }


}
