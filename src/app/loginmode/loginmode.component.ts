import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import{ApiService} from '../api.service';
import {Location} from '@angular/common';



@Component({
  selector: 'app-loginmode',
  templateUrl: './loginmode.component.html',
  styleUrls: ['./loginmode.component.scss']
})
export class LoginmodeComponent implements OnInit {
  @ViewChild('f',{static:false}) formValues;
  login: any = {}; 
  res:any = {};messagetype
  
  public edited = false;arrayvalue

  constructor(private router: Router, public apiService:ApiService, private _location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login);

    this.apiService.login(this.login).subscribe((res)=>{
      console.log(res);

        if(res["status"] == 1){

        localStorage.setItem("logintoken", res["token"]);

        this.arrayvalue = res["msg"];

        this.edited = true;
        this.formValues.resetForm();

        setTimeout(function() {
          this.edited = false;
          this._location.back();

          console.log(this.edited);
      }.bind(this), 3500);

      console.log(localStorage.getItem("logintoken")); 
        

      //  this.router.navigate(['./property']);
      


      }
      else{

        this.arrayvalue = res["status"];

        this.edited = true;
        

        setTimeout(function() {
          this.edited = false;
          console.log(this.edited);
      }.bind(this), 2500);
      }
     
    });

  }
  closebtn(){
    
    this.edited = false;
    // this._location.back();
  }
}
