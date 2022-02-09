import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {

  protected httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(protected httpClient: HttpClient) { }

  public getAll(url: string) {
    return this.httpClient.get<any[]>(environment.serviceUrl + encodeURI(url));
  }

  public getObject(url: string) {
    return this.httpClient.get<any>(environment.serviceUrl + encodeURI(url));
  }

  public postObject(obj: any, url: string) {
    return this.httpClient.post<any>(environment.serviceUrl + url, JSON.stringify(obj), this.httpOptions);
  }

  public postAll(obj: any, url: string) {
    return this.httpClient.post<any[]>(environment.serviceUrl + url, JSON.stringify(obj), this.httpOptions);
  }

  public getRestObject(url: string) {
    return this.httpClient.get<any>(url);
  }
  
  public postRestObject(url: string, obj: any) {
    return this.httpClient.post<any>(url, JSON.stringify(obj), this.httpOptions);
  }

  public postObjectForm(url: string, form: any) {
    return this.httpClient.post<any>(environment.serviceUrl + url, form);
  }

}
