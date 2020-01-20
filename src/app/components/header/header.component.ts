import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".nav-link").click(function(){
        $('#navbarSupportedContent').removeClass('show');
        // $('.collapse navbar-collapse').removeClass('collapse');
      });
    });
  }



}
