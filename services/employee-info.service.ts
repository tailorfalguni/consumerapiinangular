import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {EmpInfoModule} from '../modules/emp-info/emp-info.module';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoService {
  emp: EmpInfoModule;
  http:HttpClient;
  url: string = 'http://localhost:55814/api/EmployeeAPI';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

  constructor(http: HttpClient) {this.http=http; } //inject object of http
  GetAllEmployees():Observable<EmpInfoModule[]>
  {
    return this.http.get<EmpInfoModule[]>(this.url + '/' + 'GetAllEmployees'); 
    
  }
  GetEmployees(id: number):Observable<EmpInfoModule>
  {
    return this.http.get<EmpInfoModule>(this.url + '/' + 'GetEmployees' + '/' + id); 
    
  }
  Login(name: string, pwd: string): Observable<string>{
  return this.http.get<string>(this.url + '/' + 'Login' + '/' + name + '/' + pwd); 

  }
  InsertNewEmp(emp: EmpInfoModule): Observable<boolean>{
    return this.http.post<boolean>(this.url + '/' + 'InsertEmployee',emp,this.httpOptions);
  }
  UpdateEmp(id: number,emp: EmpInfoModule): Observable<boolean>{
   return this.http.put<boolean>(this.url+'/'+'UpdateEmployee'+'/'+id,emp,this.httpOptions);
  }

  DeleteEmployees(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.url + '/' + 'DeleteEmployees' + '/' +id);
  }
  
}
