import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getpropertylist(){
    console.log(localStorage.getItem("messagetype"));
  //   var reqHeader = new HttpHeaders({ 
  //     'Content-Type': 'application/json',
  //     'Authorization': localStorage.getItem("messagetype")
  //  });
    return this.http.get("http://182.76.7.4:3000/getWebProperty")
  }

  login(logindata) {
  

    return this.http.post("http://182.76.7.4:3000/userLogin", logindata);
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


