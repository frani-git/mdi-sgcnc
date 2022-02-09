import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MdiService {
  private subject = new Subject<any>();
 
  constructor() { }
 
  sendData(data: any){
    this.subject.next(data);
    console.log("mdi sendData() data : " , data);
  }
 
  getData(){
    return this.subject.asObservable();
  }
}