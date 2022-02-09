import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppComponent } from '../app.component';

declare var $ : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users:any;
  activateId: any;
  rxTime = new Date();
  rxDate: any;
  connection: any;
  streamTable: any;

  constructor(
    private router: Router,
    private app: AppComponent,
   
  ) {
    router.events.subscribe((val) => {           
      if (val instanceof NavigationEnd) {
      } 
    });
    
  }

  ngOnInit(): void {
  }

  logout() {
  }

  ngOnDestroy() {
  }

}
