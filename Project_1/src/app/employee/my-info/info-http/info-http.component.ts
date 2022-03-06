import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-http',
  templateUrl: './info-http.component.html',
  styleUrls: ['./info-http.component.css']
})
export class InfoHttpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  updateInfo(){
    this.router.navigate(['update-info']);
  }
}

}
