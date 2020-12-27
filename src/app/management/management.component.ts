import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  data;
  cseData = [];
  cseData2 = [];
  regNo: any[];
  sub: Subscription;
  sub2: Subscription;
  constructor(private dataService: DataService, private router: Router) {
    this.data = this.dataService.management;
    this.sub = this.dataService.managementsubject.subscribe(x => {
      this.cseData = [];
      this.regNo = [];
      this.data = x;
      var i, j;
      for (i in this.data) {

        for (j in this.data[i].correctAnswers) {
          if (this.data[i].correctAnswers[j].domain == 'management') {
            if (this.regNo.includes(this.data[i].registration)) {
            } else {
              this.regNo.push(this.data[i].registration);
              this.cseData.push({
                first_name: this.data[i].first_name,
                last_name: this.data[i].last_name,
                email: this.data[i].username,
                regno: this.data[i].registration,
                correctAnswers: this.data[i].correctAnswers[j],
                contact: this.data[i].contact_number
              });
            }
          }
        }
      }

      this.dataService.cse = this.cseData;
    })
    this.sub2 = this.dataService.managementsubject2.subscribe(x => {
      this.cseData2 = [];
      this.data = x;
      var i, j;

      for (i in this.data) {
        if (this.data[i].correctAnswers.length == 1) {
          for (j in this.data[i].correctAnswers) {
            if (this.data[i].correctAnswers[j].domain == 'management') {
              if (this.regNo.includes(this.data[i].registration)) {
              } else {
                this.regNo.push(this.data[i].registration);
                this.cseData2.push({
                  first_name: this.data[i].first_name,
                  last_name: this.data[i].last_name,
                  email: this.data[i].username,
                  regno: this.data[i].registration,
                  correctAnswers: this.data[i].correctAnswers[j],
                  contact: this.data[i].contact_number
                });
              }
            }
          }
        }
      }

      this.dataService.cse2 = this.cseData2;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  route(param, data) {
    this.dataService.userValue = data;
    this.router.navigate(['/cse/' + param]);
  }


  reload() {
    this.dataService.fetchData();
  }

  ngOnInit() {
    this.dataService.print()
  }



  ngAfterViewInit() {
    this.dataService.print();
  }
}
