import { Component,HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vibee';
  showHead: boolean = false;

  // @HostListener("window:onbeforeunload",["$event"])
  // clearLocalStorage(event){
  //     localStorage.clear();
  // }

  ngOnInit() {
  
  }

  constructor(private router: Router, public _location: Location) {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        console.log(browserRefresh);
        if(event['url'] == '/propertyinner'){
          
          this.router.navigated = true;
          console.log(this.router.navigated);
        }

        if (event['url'] == '/login' || event['url'] == '/login/loginmode' || event['url'] == '/login/signup') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

  // refresh(): void {
    
  // }
}
