import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl:any=" http://127.0.0.1:8000";
httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  getNotes(API_URL: any,):Observable<any>{
    return this.http.get(this.baseurl+API_URL,
    {headers:this.httpHeaders});
  }
  postNotes(API_URL: any,objectData: any):Observable<any>{
    return this.http.post(this.baseurl+API_URL,objectData,
    {headers:this.httpHeaders});
  }
  putNotes(API_URL: any,objectData: any):Observable<any>{
    return this.http.put(this.baseurl+API_URL,objectData,
    {headers:this.httpHeaders});
  }
  deleteNotes(API_URL: any,):Observable<any>{
    return this.http.delete(this.baseurl+API_URL,
    {headers:this.httpHeaders});
  }
  search(data){
    const API_URL='/register/?search='+data;
    return this.getNotes(API_URL);
  }
}
