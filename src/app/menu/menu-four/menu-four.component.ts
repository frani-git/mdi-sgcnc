import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-four',
  templateUrl: './menu-four.component.html',
  styleUrls: ['./menu-four.component.scss']
})
export class MenuFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    alert('생명주기 파괴');
  }

}
