import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  DynamicDirective1,
  DynamicDirective2,
  DynamicDirective3,
  DynamicDirective4,
  DynamicDirective5,
} from '../directive/dynamic.directive';
import { UnknownDynamicComponent } from '../dynamic/dynamic.component';
import { MainComponent } from '../main/main.component';
import { MenuOneComponent } from '../menu/menu-one/menu-one.component';
import { ComponentFactoryService } from '../service/component-factory.service';
import { MdiService } from '../service/mdi.service';

@Component({
  selector: 'app-mdi',
  templateUrl: './mdi.component.html',
  styleUrls: ['./mdi.component.scss'],
})
export class MdiComponent implements OnInit {
  // mdi subscribe
  subscription: Subscription;

  // menu observe array list
  mdiMenuArray: any[] = [];
  // innerHtml mdi ( default 0 : menuId 호출기준 )
  mdiStatus: any = 0;

  @ViewChild(DynamicDirective1) dynamic1: DynamicDirective1;
  @ViewChild(DynamicDirective2) dynamic2: DynamicDirective2;
  @ViewChild(DynamicDirective3) dynamic3: DynamicDirective3;
  @ViewChild(DynamicDirective4) dynamic4: DynamicDirective4;
  @ViewChild(DynamicDirective5) dynamic5: DynamicDirective5;

  // mdi startup component
  startupComponent: any = MainComponent;

  component: any;
  stashComponentList: any;

  constructor(
    private mdi: MdiService,
    private route: ActivatedRoute,
    private router: Router,
    private componentFactoryService: ComponentFactoryService
  ) {}

  ngOnInit(): void {
    this.routerResponse();
  }

  // Celestial: 라우터 연결 후 mdi 바 메뉴에 표기 후 router nagivate
  routerResponse(): void {
    console.log('mdiMenuArray : ', this.mdiMenuArray);
    this.subscription = this.mdi.getMdiMenu().subscribe((res) => {
      console.log('subscripbe', res);
      this.stashComponentList = res.components;

      if (this.mdiMenuArray.length > 4) {
        alert('더이상 메뉴를 생성 할 수 없습니다.항목을 닫아주시기 바랍니다.');
        return;
      }
      // mdiMenuArray -> 중복제거, res.data가 같은 메뉴일 경우 해당 메뉴 Open
      this.awaitConflictMenu(res.data);      
      this.awaitNavigate(res.data, this.stashComponentList);
    });
  }

  // Celesital: Menu Duplicate
  conflictMenu(result) {
    let _boolean:boolean = true;

    this.mdiMenuArray.forEach(item => { 
      if(item.id === result.id) {
        _boolean = false;  
        return false;
      }
    }) 

    if(!_boolean) return false;
    return true;
  }

  conflictPromise(menu) {
    return new Promise((resolve) => resolve(menu)).then(_result => {
      
      if (this.conflictMenu(menu)) this.mdiMenuArray.push(menu);
    });
  }

  async awaitConflictMenu(_res: any) {
    await this.conflictPromise(_res);
  }


  navigatePromise(_menu, _components) {
    return new Promise((resolve) => {
      this.getComponentType(_components, _menu['path']);
      resolve(_menu);
    }).then((res) => {
      // let _id = res["id"], _path =  res["path"];
      // console.log('Resolve Then => ', res);
      // this.componentFactoryService.createComponent(res, this.dynamic1);

      this.mdiDisplayEvent(res);
    });
  }

  async awaitNavigate(_menu: any, _components: any) {
    await this.navigatePromise(_menu, _components);
  }

  mdiDisplayEvent(res: any) {
    let _id = res['id'], _path = res['path'];
    console.log('mdi execution : ', _path);
    this.mdiStatus = _id;
  }

  getComponentType(componentList: any, _findComponent: string) {
    let type = componentList[_findComponent];
    return type || UnknownDynamicComponent;
  }

  mdiDisplayClose(res: any) {
    // mdiMenu Re-batch
    this.mdiMenuArray = this.mdiMenuArray.filter((item: any, index: any) => item.id !== res['id'] );   
    
    let currentDisplay = this.mdiMenuArray[this.mdiMenuArray?.length - 1];
    !currentDisplay || this.mdiDisplayEvent(currentDisplay);

    // Empty menuArray -> startup page (home)
    if (this.mdiMenuArray.length < 1) this.mdiStatus = 0;

  }

  ngOnDestory(): void {
    this.subscription.unsubscribe();
  }
}
