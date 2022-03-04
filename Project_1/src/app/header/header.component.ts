import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
toggle =true;

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed(){
      if (this.toggle){;
        this.toggle = false;
    
      }else{
        this.toggle =true;
      }
  }

}
