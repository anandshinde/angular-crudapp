import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private _http:HttpClient) { }

  fun(){
    return this._http.get(environment.fakeUrl)
  }
  funct(resp){
    return this._http.post(environment.fakeUrl,resp)
  }

}
