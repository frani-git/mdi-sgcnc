import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-three',
  templateUrl: './menu-three.component.html',
  styleUrls: ['./menu-three.component.scss']
})
export class MenuThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    alert('생명주기 파괴');
  }

}
