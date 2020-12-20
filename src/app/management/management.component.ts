import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  data;
  cseData = [];
  regNo: any[];
    constructor(private dataService: DataService, private router: Router) {
      this.data = this.dataService.management;
      // console.log('dataaaaaaa');
      // console.log(this.data);
      this.dataService.csesubject.subscribe(x => {
        this.cseData = [];
        this.regNo = [];
        // console.log('dataaaaaaaaaaa');
        this.data = x;
        // console.log(this.data);
        var i, j;
        for (i in this.data) {
          // console.log(this.data[i]);
          for (j in this.data[i].correctAnswers) {
            let c = this.data[i].correctAnswers[j];
            // console.log(c);
            if(this.data[i].correctAnswers[j].domain == 'management'){
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
        // console.log(this.cseData);
        this.dataService.cse = this.cseData;
      })
     }

     route(param, data){
      //  console.log(this.dataService.userValue);
        this.dataService.userValue = data;
        // console.log(this.dataService.userValue);
      //  console.log('/cse/'+param);
       this.router.navigate(['/cse/'+param]);
     }


        reload(){
    this.dataService.fetchData();
   }

     ngOnInit(){
      // if(this.cse = []){
        this.dataService.print()
      // }
    }



    ngAfterViewInit(){
      console.log('dikha');
      // if(this.cse = []){
        this.dataService.print();
      // }
    }
}
