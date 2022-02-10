import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicDirective1 } from '../directive/dynamic.directive';
import { MainComponent } from '../main/main.component';
import { MenuFiveComponent } from '../menu/menu-five/menu-five.component';
import { MenuFourComponent } from '../menu/menu-four/menu-four.component';
import { MenuOneComponent } from '../menu/menu-one/menu-one.component';
import { MenuThreeComponent } from '../menu/menu-three/menu-three.component';
import { MenuTwoComponent } from '../menu/menu-two/menu-two.component';
import { ComponentFactoryService } from '../service/component-factory.service';
import { MdiService } from '../service/mdi.service';

export interface type{
  id:string;
  name:string;
  path:string;
}

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @ViewChild(DynamicDirective1) dynamic1: DynamicDirective1;
  
  menus: type[] = [
    {id : "1", name : "1차메뉴", path: 'MenuOneComponent' },
    {id : "2", name : "2차메뉴", path: 'MenuTwoComponent' },
    {id : "3", name : "3차메뉴",  path: 'MenuThreeComponent' },
    {id : "4", name : "4차메뉴",  path: 'MenuFourComponent' },
    {id : "5", name : "5차메뉴",  path: 'MenuFiveComponent' },
  ];

  // menu 와 연결되는 component를 기입
  components: any = {
    'MenuOneComponent' : MenuOneComponent,
    'MenuTwoComponent' : MenuTwoComponent,
    'MenuThreeComponent' : MenuThreeComponent,
    'MenuFourComponent' : MenuFourComponent,
    'MenuFiveComponent' : MenuFiveComponent,
  }

  constructor(
    private mdi: MdiService,
  ) { 
  
  }

  ngOnInit(): void {
    
  }

 
  componentMdi(_menu: any) {
    console.log('_menu : ', _menu.path);
    this.mdi.sendMdiMenu(_menu, this.components);
  }

  ngOnDestory() {
  }
    
}
