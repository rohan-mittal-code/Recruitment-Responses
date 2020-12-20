import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

   route(param){
    //  console.log(this.dataService.userValue);
      // this.dataService.userValue = data;
      // console.log(this.dataService.userValue);
    //  console.log('/cse/'+param);
     this.router.navigate([param]);
   }
  ngOnInit(): void {
  }

}
