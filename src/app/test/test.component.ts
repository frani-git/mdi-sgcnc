import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  @Input() data!: any;
  @Output() eventOutput: EventEmitter<any> = new EventEmitter<any>();
        
  
  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.eventOutput.emit("Button is click");
  }      
  

}
