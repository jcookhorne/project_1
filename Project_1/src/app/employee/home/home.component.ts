import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewDate: Date= new Date();
  constructor() { }

  ngOnInit(): void {
    const imageUrl = "https://www.free-printable-calendar.com/2022-printable-calendar-image/march-2022-printable-calendar.jpg"
  
  }
}
