import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.scss']
})
export class MenuTwoComponent implements OnInit {

  
  // 컴포넌트 단위 중복값 체크 Test
  typeC: any = '2';

  constructor() { }

  ngOnInit(): void {
    alert('컴포넌트 단위로 중복값이 전역으로 영향을 주는 테스트\n변수 명칭 : typeC' + ' , 값 : ' + this.typeC );
  }

  
  ngOnDestroy(): void {
    alert('생명주기 파괴');
  }


}
