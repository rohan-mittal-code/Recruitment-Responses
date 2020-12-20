import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class EceComponent implements OnInit {

  data;
  cseData = [];
    constructor(private dataService: DataService, private router: Router) {
      this.data = this.dataService.ece;
      this.dataService.csesubject.subscribe(x => {
        // console.log('dataaaaaaaaaaa');
        this.data = x;
        // console.log(this.data);
        var i, j;
        for (i in this.data) {
          // console.log(this.data[i]);
          for (j in this.data[i].correctAnswers) {
            let c = this.data[i].correctAnswers[j];
            // console.log(c);
            if(this.data[i].correctAnswers[j].domain == 'ece'){
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
    ngOnInit(): void {
    }

}
