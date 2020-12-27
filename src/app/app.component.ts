import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './_services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'responses-portal';
  photography = [];
  cse = [];
  ece = [];
  editorial = [];
  management = [];
  design = [];
  constructor(private httpClient: HttpClient, private dataService: DataService) {
    this.dataService.print();
  }
  ngOnInit(){
    // if(this.cse = []){
      this.dataService.print()
    // }
  }



  ngAfterViewInit(){
    // if(this.cse = []){
      this.dataService.print();
    // }
  }

}
