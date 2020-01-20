import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
declare var jQuery: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})          
export class HomepageComponent implements OnInit {
  public locations = [];
  model: any = {};
  title = 'NG7Swiper';
  msg:any;
  images: Array<any> = [];
  countries: Array<any> = []
 
 
   constructor(public apiService:ApiService) {
    this.images = [
      { name: 'assets/img/property1/bitmap-copy-5.jpg',title:'title 1',rating:'8' },
      { name: 'assets/img/property2/bitmap.jpg', title:'title 2',rating:'7' },
      { name: 'assets/img/property3/bitmap.jpg',title:'title 3',rating:'8' },
      { name: 'assets/img/property1/bitmap-copy-5.jpg',title:'title 4',rating:'8' },
      { name: 'assets/img/property2/bitmap.jpg',title:'title 5',rating:'9' },
      { name: 'assets/img/property3/bitmap.jpg',title:'title 6',rating:'8' },
      { name: 'assets/img/property1/bitmap-copy-5.jpg',title:'title 8',rating:'9' },
      { name: 'assets/img/property2/bitmap.jpg',title:'title 8',rating:'9' },
      { name: 'assets/img/property3/bitmap.jpg',title:'title 9',rating:'8' },
      { name: 'assets/img/property1/bitmap-copy-5.jpg',title:'title 10',rating:'9' },
    ]
    
    this.countries = [
      {id: 1, name: "United States"},
      {id: 2, name: "Australia"},
      {id: 3, name: "Canada"},
      {id: 4, name: "Brazil"},
      {id: 5, name: "England"}
    ];
    
  }

  ngOnInit() {
 
   

    }
    onSubmit() {
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

      // console.log(this.model.propertytype)
      // console.log(this.model.firstName)
      
      if(this.model.propertytype == undefined){
        this.model.propertytype = "Flat";
      }
      
    }

}
