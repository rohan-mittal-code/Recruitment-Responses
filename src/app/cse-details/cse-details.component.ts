import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-cse-details',
  templateUrl: './cse-details.component.html',
  styleUrls: ['./cse-details.component.css']
})
export class CseDetailsComponent implements OnInit {

  data;
  constructor(private dataService: DataService) {
    // console.log('in details');
    this.data = dataService.userValue;
    // console.log(dataService.userValue);
   }

  ngOnInit(): void {
  }

}
