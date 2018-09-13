import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTask();
  }
  getTasks(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
  }
  getTask(){
    return this._http.get('/task/')
  }
}