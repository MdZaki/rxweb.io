import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-why',
    templateUrl: './why-component.html'
})
export class WhyRxwebComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    constructor() { }

    ngOnInit() {
        this.showComponent = true;
    }
    @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = document.documentElement.scrollTop;
         if(windowScroll >= 50){
               this.sticky = true;
          } else {
              this.sticky = false;
          }
    }
    
     scrollTo(section) {
         location.hash = section;
         return false;
     }
}