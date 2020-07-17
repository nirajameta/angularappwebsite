import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import{ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f',{static:false}) formValues;
  login: any = {}; 
  res:any = {};messagetype;
  public edited = false;arrayvalue
 
  register: any = {};
   message :string;
  usersignon:any = {} ;firstdata;
  

  constructor(private router: Router, public apiService:ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login);

    this.apiService.login(this.login).subscribe((res)=>{
      console.log(res);

        if(res["status"] == 1){

        localStorage.setItem(this.messagetype, res["token"]);

        this.arrayvalue = res["msg"];

        this.edited = true;

        setTimeout(function() {
          this.edited = false;
          console.log(this.edited);
      }.bind(this), 5000);

      console.log(localStorage.getItem(this.messagetype)); 
        

      //  this.router.navigate(['./property']);
      


      }
      else{

        this.arrayvalue = res["status"];

        this.edited = true;

        setTimeout(function() {
          this.edited = false;
          console.log(this.edited);
      }.bind(this), 5000);
      }
     
    });
 
  }

  onregisterSubmit() {
    console.log(this.register)

    var payload = 
    {
      "username" : this.register.username,
      "password" : this.register.password,
   
      "user_type": "webuser",
      "email" : this.register.email,
      "contact" : this.register.phone,
      "gender" : this.register.gender,
      
    }
    console.log(payload);

    this.apiService.createUser(payload).subscribe(response => {
      console.log(response);

      if(response["status"] == 0){
      this.edited = true;
      this.arrayvalue = response["msg"];

      setTimeout(function() {
        this.edited = false;
        this.formValues.resetForm();
        console.log(this.edited);
    }.bind(this), 7000);
    }

    if(response["status"] == 1){
      this.edited = true;
      this.arrayvalue = response["msg"];

      setTimeout(function() {
        this.edited = false;
        this.formValues.resetForm();
        this.router.navigate(['/login/loginmode']); 
        console.log(this.edited);
    }.bind(this), 4000);
    
   }


    })
  

  }

}
