import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ApiService} from '../api.service';
import {Location} from '@angular/common';



@Component({
  selector: 'app-loginmode',
  templateUrl: './loginmode.component.html',
  styleUrls: ['./loginmode.component.scss']
})
export class LoginmodeComponent implements OnInit {
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
}
