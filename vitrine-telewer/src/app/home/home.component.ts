import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scrollTop = false;
  billPlan: string = 'monthly';
  navigationOpen = false;
  stickyMenu = false;
  filterTab = 1;
  dropdown = false;
  page = ''
  darkMode = false;

  constructor() {}

  ngOnInit() {
  }


  @HostListener('window:scroll')
  onScroll() {
    this.scrollTop = (window.pageYOffset > 50) ? true : false;
  }
  

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }  

  toggleBillPlan() {
    this.billPlan = (this.billPlan === 'monthly') ? 'annually' : 'monthly';
      }

toggleNavigation() {

  this.navigationOpen = !this.navigationOpen;
    }


    setFilterTab(tab: number) {
    
   
      this.filterTab = tab;
        }

 onScrollT() {
    this.stickyMenu = (window.pageYOffset > 20);
   }

toggleDropdown() {
  this.dropdown = !this.dropdown;
}

isSpecialPage() {
  return (
    this.page === 'blog-grid' ||
    this.page === 'blog-single' ||
    this.page === 'signin' ||
    this.page === 'signup' ||
    this.page === '404'
  );
}
  
toggleDarkMode() {
  this.darkMode = !this.darkMode;
    }
}
