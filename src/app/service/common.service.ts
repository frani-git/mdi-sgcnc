import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class CommonService {

  private menuSubject = new Subject<any[]>();
  
  constructor(
    protected http: HttpClient,
    private router: Router) { 
  }

  getMenuObserve() : Observable <any[]> {
    return this.menuSubject.asObservable();
  }

 

  removeSessionItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  _utf8_encode(string: string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  }

  // private method for UTF-8 decoding
  _utf8_decode(utftext: string) {
    var string = "";
    var i  = 0;
    var c  = 0;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;

    while ( i < utftext.length ) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2); 
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }

    return string;
  }


  // Checkbox
  onCheckboxChange($event: any, _thisCheckboxList: any): any {
    let _id = Number($event.target.value);
    if ($event.target.checked) {
      _thisCheckboxList.push(_id);
    }
    else {
      const index = _thisCheckboxList.indexOf(_id);
      if (index > -1) _thisCheckboxList.splice(index, 1);
    }
    _thisCheckboxList.filter((item: any, index: any) => _thisCheckboxList.indexOf(item) === index);    
    
    // console.log('checkboxList : ', _thisCheckboxList);
    return _thisCheckboxList;
    
  }
  
  // All Checkbox
  onCheckboxAllChange($event: any, _thisCheckboxList:any, _thisQueryList: any): any {
    if ($event.target.checked) {
      _thisQueryList.forEach((item: { checked: boolean; id: any; }) => { 
        item.checked = true;
        _thisCheckboxList.push(item.id);
      });
    }
    else {
      _thisQueryList.forEach( (item: { checked: boolean; id: any; }, index: any) => { 
        
        item.checked = false;
        _thisCheckboxList.splice(index, item.id);
      });
    }

    _thisCheckboxList.filter((item: any, index: any) => _thisCheckboxList.indexOf(item) === index);    
    // console.log('checkboxList : ', _thisCheckboxList);
    
    return { queryList : _thisQueryList, checkboxList : _thisCheckboxList }
  }



}

@Pipe({name: 'textMask'})
export class TextMaskPipe {
  transform(tel: string): any {
    if (tel === null || tel === '' || typeof(tel) === 'undefined') {
      return '';
    }
    let result = '';
    const sLength = tel.length;
    for (let i = 0; i < sLength; i++){
      result += i >= sLength - 2 ? '*' : tel.charAt(i);
    }
    return result;
  }
}


