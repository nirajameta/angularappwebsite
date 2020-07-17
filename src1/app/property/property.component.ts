import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Location} from '@angular/common';
// import { ModalService } from '../modal.service';
import { Options } from 'ng5-slider';
import{ApiService} from '../api.service';




declare var $: any;




@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  proprtyName: Array<any> = []
  xyzlist: Array<any> = []

  checkedList: Array<any> = []
  private bodyText: string;
  value: number = 0;
  options: Options = {    
    floor: 0,
    ceil: 250
  };
  currentRate:number = 0;
  model: any = {};

  isAscendic = true
  isActive: boolean = false;
  //selectedRow : Number;
  rowClicked : any;
  displaylist:any;
  
  
  constructor(private router: Router,public _location: Location, public apiService:ApiService) { 

    this.proprtyName = [
      {id: 1, name: "Gala Imperia", img:'assets/img/property1/bitmap-copy-5.jpg', price:"2",ratings:"8"},
      {id: 2, name: "Gala Imperia 1", img:'assets/img/property2/bitmap.jpg', price:"1.7",ratings:"8"},
      {id: 3, name: "Gala Imperia 2", img:'assets/img/property3/bitmap.jpg', price:"1.4",ratings:"9"},
      {id: 4, name: "Gala Imperia 3", img:'assets/img/property1/bitmap-copy-5.jpg', price:"1.8",ratings:"9" },
      {id: 5, name: "Gala Imperia 4", img:'assets/img/property2/bitmap.jpg', price:"2",ratings:"8"}
    ];

 
    

  }

  ngOnInit(){
    this.apiService.getpropertylist().subscribe((res : any[])=>{
      console.log(res);
      this.displaylist = res["data"];
     
    });
    //allow only one checkbox
   
    }

    



    // Sort by price
    pricesort(){
       this.isAscendic?this.ascendicprice():this.descendicprice()
     }

     ascendicprice(){
      this.isAscendic = false;
      this.proprtyName.sort((a, b) => {
        if (a.price < b.price) return -1;
        else if (a.price > b.price) return 1;
        else return 0;
      });
    }
  
    descendicprice(){
      this.isAscendic = true
      this.proprtyName.sort((a, b) => {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        else return 0;
      });
    }

    // Sort by rating
    ratingsort(){

      this.isAscendic?this.ascendicrating():this.descendicrating()
     }

     ascendicrating(){
      this.isAscendic = false;
      this.proprtyName.sort((a, b) => {
        if (a.ratings < b.ratings) return -1;
        else if (a.ratings > b.ratings) return 1;
        else return 0;
      });
    }
  
    descendicrating(){
      this.isAscendic = true
      this.proprtyName.sort((a, b) => {
        if (a.ratings > b.ratings) return -1;
        else if (a.ratings < b.ratings) return 1;
        else return 0;
      });
    }


 


  nextpage(item){
  
    // this.router.navigateByUrl('/propertyinner', {skipLocationChange: true}).then(()=>
    // this.router.navigate(['/propertyinner'])); 
    // this.router.navigate(['/propertyinner'], { state: {item} });
    // this.router.navigate(['/propertyinner']);
    // location.reload();

   
      // this.router.navigate([]);
   
      this.router.navigateByUrl('/propertyinner');
   
    
  }

//   setClickedRow(i){
//     this.selectedRow = i;
//     console.log(this.selectedRow);
// }

changeTableRowColor(idx: any) 
{
  this.rowClicked = idx;

}

}
