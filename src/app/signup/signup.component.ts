import { Component, OnInit, ViewChild } from '@angular/core';
import{ApiService} from '../api.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('f',{static:false}) formValues;
  register: any = {};
   message :string;
  usersignon:any = {} ;firstdata;
  array;arrayvalue
  public edited = false;
  

  constructor(public apiService:ApiService, private router: Router) { }

  ngOnInit() {
    this.register.gender = ""
  }

  onSubmit() {
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
    }.bind(this), 2500);
    }

    if(response["status"] == 1){
      this.edited = true;
      this.arrayvalue = response["msg"];

      setTimeout(function() {
        this.edited = false;
        this.formValues.resetForm();
       
        console.log(this.edited);
    }.bind(this), 2500);
    
   }


    })
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register))
    // this.apiService.register(this.register).subscribe((res)=>{
    //   console.log(res);
     
     
     
      
    //   console.log(this.arrayvalue);


    //   this.edited = true;

    //   setTimeout(function() {
    //     this.edited = false;
    //     console.log(this.edited);
    // }.bind(this), 7000);

    // });

  }

  closebtn(){
    
    this.edited = false;
    // this._location.back();
  }

}
