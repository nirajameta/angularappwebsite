import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // login: any = {}; 
  // register:any = {}
  // res:any = {};messagetype
  
  // public edited = false;arrayvalue

  constructor(private router: Router, public apiService:ApiService) { }

  ngOnInit() {
    
  }

 

    // this.apiService.login(this.login).subscribe((res)=>{
    //   console.log(res);

    //     if(res["status"] == 1){

    //     localStorage.setItem(this.messagetype, res["token"]);

    //     this.arrayvalue = res["msg"];

    //     this.edited = true;

    //     setTimeout(function() {
    //       this.edited = false;
    //       console.log(this.edited);
    //   }.bind(this), 5000);

    //   console.log(localStorage.getItem(this.messagetype)); 
    
    // }
    //   else{

    //     this.arrayvalue = res["status"];

    //     this.edited = true;

    //     setTimeout(function() {
    //       this.edited = false;
    //       console.log(this.edited);
    //   }.bind(this), 5000);
    //   }
     
    // });

  



}
