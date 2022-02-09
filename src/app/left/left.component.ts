import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuFiveComponent } from '../menu/menu-five/menu-five.component';
import { MenuFourComponent } from '../menu/menu-four/menu-four.component';
import { MenuOneComponent } from '../menu/menu-one/menu-one.component';
import { MenuThreeComponent } from '../menu/menu-three/menu-three.component';
import { MenuTwoComponent } from '../menu/menu-two/menu-two.component';
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

  menus: type[] = [
    {id : "1", name : "1차메뉴", path: 'menu' },
    {id : "2", name : "2차메뉴", path: 'menu' },
    {id : "3", name : "3차메뉴",  path: 'menu' },
    {id : "4", name : "4차메뉴",  path: 'menu' },
    {id : "5", name : "5차메뉴",  path: 'menu' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mdi: MdiService,
  ) { 
    
  }

  ngOnInit(): void {
  }

  componentMdi(_menu: any) {
    // this.mdi.sendData(_menu);
    // this.router.navigate([_menu.router]).then(() => { this.mdi.sendData(_menu); });
    // this.router.navigate([{ outlets: {[_menu.id]: [_menu.router]}}],{relativeTo:this.route}).then(() => {this.mdi.sendData(_menu); });
    // this.router.navigate([{ outlets: { 1 : [ 'menu1' ] }}]).then( ()=> this.mdi.sendData(_menu));
    console.log('_menu : ', _menu.path);
    this.mdi.sendData(_menu);
    


  }
  ngOnDestory() {
    
  }
    
}
