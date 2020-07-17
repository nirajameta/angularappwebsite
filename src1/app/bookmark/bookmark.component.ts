import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  proprtyName: Array<any> = []
  public locations = [];
  images: Array<any> = [];


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
      { name: 'assets/img/property1/bitmap-copy-5.jpg',title:'title 10',rating:'9' }
     
    ]
    
    this.proprtyName = [
      {id: 1, name: "Gala Imperia", img:'assets/img/property1/bitmap-copy-5.jpg'},
      {id: 2, name: "Gala Imperia 1", img:'assets/img/property2/bitmap.jpg'},
      {id: 3, name: "Gala Imperia 2", img:'assets/img/property3/bitmap.jpg'},
      {id: 4, name: "Gala Imperia 3", img:'assets/img/property1/bitmap-copy-5.jpg'},
      {id: 5, name: "Gala Imperia 4", img:'assets/img/property2/bitmap.jpg'},
      {id: 6, name: "Gala Imperia 5", img:'assets/img/property3/bitmap.jpg'},
      {id: 7, name: "Gala Imperia 6", img:'assets/img/property1/bitmap-copy-5.jpg'},
      {id: 8, name: "Gala Imperia 7", img:'assets/img/property2/bitmap.jpg'},
      {id: 9, name: "Gala Imperia 8", img:'assets/img/property3/bitmap.jpg'},
      {id: 10, name: "Gala Imperia 9", img:'assets/img/property1/bitmap-copy-5.jpg'}
    ];
  }

  ngOnInit() {
 
   

    }

}
