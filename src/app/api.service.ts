import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseurl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  public getpropertylist(){
    console.log(localStorage.getItem("messagetype"));
  //   var reqHeader = new HttpHeaders({ 
  //     'Content-Type': 'application/json',
  //     'Authorization': localStorage.getItem("messagetype")
  //  });
    return this.http.get(this.baseurl+ "getWebProperty")
  }

  login(logindata) {
  

    return this.http.post(this.baseurl+ "userLogin", logindata);
  }

  bookmark(payload){
    let token  = localStorage.getItem("logintoken")
    console.log(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
   

   return this.http.post( this.baseurl+'addBookmark',payload,{ headers: headers }); 
  }

  public createUser(payload) {
    const formData: FormData = new FormData();
   
  
     
    formData.append('username', payload.username); 
    formData.append('password', payload.password);
    formData.append('email', payload.email);
    formData.append('user_type', payload.user_type);
    formData.append('contact', payload.contact);
    formData.append('gender', payload.gender);
    formData.append('dob', "1995-03-25");
    

    return this.http.post("http://182.76.7.4:3000/"+"createUser", formData)

  }
  
  
}


