import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-five',
  templateUrl: './menu-five.component.html',
  styleUrls: ['./menu-five.component.scss']
})
export class MenuFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    alert('생명주기 파괴');
  }
  

}
