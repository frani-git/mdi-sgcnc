import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MdiService } from '../service/mdi.service';
 
@Component({
  selector: 'app-mdi',
  templateUrl: './mdi.component.html',
  styleUrls: ['./mdi.component.scss']
})
export class MdiComponent implements OnInit {

  // mdi subscribe 
  subscription: Subscription;
  // menu observe array list
  mdiMenuArray: any[] = [];
  // innerHtml mdi
  mdiContents: SafeHtml;
  mdiStatus: any;

  constructor(
    private mdi: MdiService,
    private route:ActivatedRoute,
    private router: Router,
  ) { }
  
  ngOnInit(): void {
    this.routerResponse();
  }

  // Celestial: 라우터 연결 후 mdi 바 메뉴에 표기 후 router nagivate
  routerResponse(): void {
    console.log('mdiMenuArray : ', this.mdiMenuArray);
    this.subscription = this.mdi.getData().subscribe(menu => {        
      if (this.mdiMenuArray.length > 4) {
        alert("더이상 메뉴를 생성 할 수 없습니다.항목을 닫아주시기 바랍니다.");
        return;
      }
      console.log('subscribe menu : ', menu);
      this.mdiMenuArray.push(menu);
      this.awaitNavigate(menu); 
    });
  }

  navigatePromise(_menu) {
    return new Promise( (resolve) => {
      resolve(_menu);
    }).then( ( res ) => {
      let _id = res["id"], _path =  res["path"];
      this.router.navigate([{ outlets: { [_id]: [_path] }}],{relativeTo:this.route} ); // skipLocationChange: true 
      console.log('this.mdiContentsGenerate(this.mdiMenuArray) : ', this.mdiMenuArray);
      console.log('Promise then : ', res);
    });
  }

  async awaitNavigate(_menu: any) {
    await this.navigatePromise(_menu);
  }

  onActivate(_menuId: any) {
    this.mdiStatus = _menuId;
  }

  mdiDisplayEvent(res: any) {
    let _id = res["id"], _path =  res["path"];
    console.log('mdi execution : ', _path);
    this.mdiStatus = _id;
  }

  close(res: any) {

  }

  ngOnDestory(): void {
    this.subscription.unsubscribe();
  }

}
