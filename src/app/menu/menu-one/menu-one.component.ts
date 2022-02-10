import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss']
})
export class MenuOneComponent implements OnInit {

// 컴포넌트 단위 중복값 체크 Test
typeC: any = '1';

// Declaration
showInquiryDiv: boolean = false;
inquiryList: any[] = [];
checkboxList: any[] = [];
msg: any = {};
pageInfo: any;

// Search Group
group: FormGroup;
subGroup: FormGroup;

@ViewChild('formDirective', { static: false }) private subGroupDirective: NgForm;

constructor(
  private router: Router,
  private fb: FormBuilder,
  private commonService: CommonService,
  private httpService: HttpService,
) {
  // inqSubYn : 상세검색 여부 판단 조회 FLAG
  this.group = this.fb.group({
    inqKeyword:   [null],
    inqSubYn:     ["N"],
  });

  this.subGroup = this.fb.group({
    inqLayrNm:    [null],
    inqUseYn:     [""],
    inqIcon:      [null],
    inqSubYn:     ["Y"],
  });

  this.msg = {
    notSelect : "선택한 레이어 항목이 없습니다.",
    delete    : "선택한 항목을 삭제 하시겠습니까?",
  };

}

ngOnInit(): void {
  this.inquiry();
  alert('컴포넌트 단위로 중복값이 전역으로 영향을 주는 테스트\n변수 명칭 : typeC' + ' , 값 : ' + this.typeC );
}


// Search
inquiry(): void {
  let param: any = this.group?.getRawValue();
  this.httpService.postObject(param, '/layr/inquiry.do').subscribe(res => {
    this.inquiryList = res.pageRes.content;
    this.pageInfo = res.pageInfoRes;
  });
}

// Sub Search
subInquiry(): void {
  let param: any = this.subGroup?.getRawValue();
  this.httpService.postObject(param, '/layr/inquiry.do').subscribe(res => {
    this.inquiryList = res.pageRes.content;
    this.pageInfo = res.pageInfoRes;
  });
}

// Sub Search Reset
subReset(): void {
  this.subGroupDirective.reset();
  this.subGroup.controls["inqSubYn"].setValue("Y");
  this.subGroup.controls["inqUseYn"].setValue("");

}

// Detail Page
detail(id: any): void {
  this.router.navigate(['/sys/layr/inquiry/dtl/' + id]).then(() => {});
}

// Checkbox
onCheckboxChange($event: any) {
  this.checkboxList = this.commonService.onCheckboxChange($event, this.checkboxList);
}

// All Checkbox
onCheckboxAllChange($event: any) {
  let change = this.commonService.onCheckboxAllChange($event, this.checkboxList, this.inquiryList);
  this.checkboxList = change.checkboxList;
  this.inquiryList = change.queryList;
}

// Delete on select
deletion() {
  let deleteFlag:boolean = true;

  if (this.checkboxList.length < 1) {
    alert(this.msg.notSelect);
    deleteFlag = false;
  }
  if (!deleteFlag) return false;

  if (confirm(this.msg.delete)) this.awaitDeletion();
}

// Delete on Promise (checkboxList 삭제)
deletionPromise(_checkboxList: any[]) {
  return new Promise( (resolve) => {
    _checkboxList.forEach((id: string) => {
      this.httpService.getObject('/layr/dtl/' + id + '/deletion.do').subscribe(d => resolve(d));
    });
  }).then( (v) => {
    console.log('Promise then : ', v);
  });
}

// Delete on Promise -> await
async awaitDeletion() {
  await this.deletionPromise(this.checkboxList);
  alert("삭제가 완료 되었습니다.");

}


ngOnDestroy(): void {
  alert('생명주기 파괴');
}

}
