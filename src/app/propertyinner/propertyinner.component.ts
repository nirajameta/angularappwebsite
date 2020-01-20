import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import{ApiService} from '../api.service';
//import * as jsPDF from '../../assets/js/jspdf.js';

import * as jsPDF from 'jspdf'






declare var $: any;


// interface JQuery {
//   owlCarousel():void;
// }

@Component({
  selector: 'app-propertyinner',
  templateUrl: './propertyinner.component.html',
  styleUrls: ['./propertyinner.component.scss']
})
export class PropertyinnerComponent implements OnInit {
  

  example; app:object;name;
  countries: Array<any> = [];
  images1: Array<any> = [];
  images: Array<any> = [];
  
  public locations = [];
  images2 = [
    {
      text: "BedRoom",
      name: "1234",
      prop_img_1_Path: "profile-1575020167254.jpeg"
    },
    {
      text: "DiningRoom",
      name: "5678",
      prop_img_1_Path: "profile-1575020167254.jpeg"
    },
    {
      text: "GuestRoom",
       name: "91011",
       prop_img_1_Path: "profile-1575020167254.jpeg"
    },
    {
      text: "Kitchen",
      name: "121314",
      prop_img_1_Path: "profile-1575020167254.jpeg"
    },
    {
      text: "BedRoom",
      name: "151617",
      prop_img_1_Path: "profile-1575020167254.jpeg"
    }
    
    
  ]
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  


  constructor(private router: Router, private location: Location, public apiService:ApiService) {
    this.countries = [
      {id: 1, img: 'assets/img/images/1.jpg', name:"Bedroom"},
      {id: 2, img: 'assets/img/images/2.jpg', name:"diningroom"},
      {id: 3, img: 'assets/img/images/3.jpg', name:"Guestroom"},
      {id: 4, img: 'assets/img/images/4.jpg', name:"apnaroom"},
      {id: 5, img: 'assets/img/images/5.jpg', name:"kitchen"}
    ];

    this.images1 = [
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

    // this.carouselOptions = {
    //   margin: 25,
    //   nav: true,
    //   navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    //   responsiveClass: true,
    //   responsive: {
    //     0: {
    //       items: 1,
    //       nav: true
    //     },
    //     600: {
    //       items: 1,
    //       nav: true
    //     },
    //     1000: {
    //       items: 2,
    //       nav: true,
    //       loop: false
    //     },
    //     1500: {
    //       items: 3,
    //       nav: true,
    //       loop: false
    //     }
    //   }
    // }

   this.images = [
      {
        text: "BedRoom",
        image: "assets/img/slider/bedroom.jpg"
      },
      {
        text: "DiningRoom",
        image: "assets/img/slider/dining.jpg"
      },
      {
        text: "GuestRoom",
        image: "assets/img/slider/guest.jpeg"
      },
      {
        text: "Kitchen",
        image: "assets/img/slider/kitchen.jpeg"
      },
      {
        text: "BedRoom",
        image: "assets/img/slider/images1.jpeg"
      },
      {
        text: "DiningRoom",
        image: "assets/img/slider/dining.jpg"
      },
      {
        text: "GuestRoom",
        image: "assets/img/slider/guest.jpeg"
      },
      {
        text: "Kitchen",
        image: "assets/img/slider/kitchen.jpeg"
      },
      
    ]

  
  
    // console.log(this.router.getCurrentNavigation().extras.state.item);
    // console.log(this.router.getCurrentNavigation().extras.state.name);
    // this.app = this.router.getCurrentNavigation().extras.state.item
    // this.name = (this.app ["name"])
  }

  ngOnInit() {
    // // this.router.navigateByUrl("/propertyinner", { skipLocationChange: true }).then(() => {
    // //   console.log(decodeURI(this.location.path()));
    // //   this.router.navigate([decodeURI(this.location.path())]);
    //   // this.router.navigate(['/propertyinner']);
    // });
    // location.reload();


    $(document).ready(function() {
 
      $(".owl-carousel").owlCarousel({
     
          autoPlay: true, //Set AutoPlay to 3 seconds
          margin: 25,
          items : 3,
          navigation : true,
          autoWidth:false,
          nav: false,
          dots: false,
          navigationText: [
            "<i class='icon-chevron-left icon-white'><</i>",
            "<i class='icon-chevron-right icon-white'>></i>"
          ],
          // pagination: false,

          autoplaySpeed:1000,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
          
      });
     
    });
   

    }

    public downloadAsPDF() {
      const doc = new jsPDF();
  
      const specialElementHandlers = {
        '#editor': function (element, renderer) {
          return true;
        }
      };
  
      const pdfTable = this.pdfTable.nativeElement;
  
      doc.fromHTML(pdfTable.innerHTML, 15, 15, {
        width: 190,
        'elementHandlers': specialElementHandlers
      });
      var imgData = 'data:image/jpeg;base64';
      doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
  
      doc.save('tableToPdf.pdf');
    }
    // ngAfterViewInit(){
    //   location.reload();
    // }

 

}
