import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.scss']
})
export class ContactinfoComponent implements OnInit {
  displaydirection:boolean
  constructor() { }

  ngOnInit() {
    this.displaydirection = true;
  }

  clickarrow(){
    this.displaydirection = false;
  }

}
