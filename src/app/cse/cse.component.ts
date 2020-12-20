import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {
  data;
  cseData = [];
  regNo = [];
  constructor(private dataService: DataService, private router: Router) {
    this.data = this.dataService.cse;
    this.dataService.csesubject.subscribe(x => {
      this.cseData = [];
      this.regNo = [];
      this.data = x;
      var i, j;
      for (i in this.data) {
        for (j in this.data[i].correctAnswers) {
          if (this.data[i].correctAnswers[j].domain == 'cse') {
            if (this.regNo.includes(this.data[i].registration)) {
              // console.log(this.data[i].registration);
            } else {
              this.regNo.push(this.data[i].registration);
              this.cseData.push({
                first_name: this.data[i].first_name,
                last_name: this.data[i].last_name,
                email: this.data[i].username,
                regno: this.data[i].registration,
                correctAnswers: this.data[i].correctAnswers[j]
              });
            }
          }
        }
      }
      this.dataService.cse = this.cseData;
    })
  }

  reload() {
    this.dataService.fetchData();
  }

  route(param, data) {
    //  console.log(this.dataService.userValue);
    this.dataService.userValue = data;
    // console.log(this.dataService.userValue);
    //  console.log('/cse/'+param);
    this.router.navigate(['/cse/' + param]);
  }
  ngOnInit() {
    // if(this.cse = []){
    this.dataService.print()
    // }
  }



  ngAfterViewInit() {
    console.log('dikha');
    // if(this.cse = []){
    this.dataService.print();
    // }
  }

}
