import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MdiService {
  private subject = new Subject<any>();
  private viewChildSubject = new Subject<any>();
 
  constructor() { }
 
  sendMdiMenu(data: any, components: any) {

    let _data = {
      'data' : data,
      'components' : components
    };

    this.subject.next(_data);
    console.log("mdi sendMenu() data : " , _data);
  }
 
  getMdiMenu(){
    return this.subject.asObservable();
  }

  sendMdiView(data: any) {
    this.viewChildSubject.next(data);
    console.log("mdi sendView() Child : ", data);
  }

  getMdiView() {
    return this.subject.asObservable();
  }


}