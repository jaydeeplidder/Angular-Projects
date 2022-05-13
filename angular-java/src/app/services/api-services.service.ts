import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  // headers:any = new HttpHeaders().set("'Access-Control-Allow-Origin' ","*");
  
  // base_url: string = "api/" ;
  constructor(private http:HttpClient) { }
  postUser(User: User){
    return  this.http.post<User>("http://localhost:8080/users",User,{responseType:'text' as 'json' });
  }


  getJavaUsers() {
    return this.http
      .get("http://localhost:8080/users")
      .pipe(map(res =>console.log(res)));
  }

  // getProduct(){
  //   return this.http.get<any>("http://localhost:8080/users");
  // }
  // getByIdProduct(id:number){
  //   return this.http.get<any>("http://localhost:8080/users/"+id);
  // }

  // putProduct(data:any,id:number){
  //   return this.http.put<any>("http://localhost:8080/users/"+id,data)
  // }

  // deleteProduct(id:number){
  //   return this.http.delete<any>("http://localhost:8080/users/"+id);
  // }
}
