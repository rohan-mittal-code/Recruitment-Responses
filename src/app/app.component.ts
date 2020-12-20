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
    this.httpClient.get("assets/responsesData.json").subscribe(data => {
      // console.log(data);
      var i, j;
      for (i in data) {
        console.log(data[i]);
        for (j in data[i].correctAnswers) {
          let c = data[i].correctAnswers[j];
          // console.log(c);
          if(data[i].correctAnswers[j].domain == 'cse'){
            this.cse.push(data[i]);
          }else if(data[i].correctAnswers[j].domain == 'ece'){
            this.ece.push(data[i]);
          }else if(data[i].correctAnswers[j].domain == 'design'){
            this.design.push(data[i]);
          }else if(data[i].correctAnswers[j].domain == 'photography'){
            this.photography.push(data[i]);
          }else if(data[i].correctAnswers[j].domain == 'management'){
            this.management.push(data[i]);
          }else if(data[i].correctAnswers[j].domain == 'editorial'){
            this.editorial.push(data[i]);
          }
        }
      }
      this.dataService.cse = this.cse;
      this.dataService.ece = this.ece;
      this.dataService.photography = this.photography;
      this.dataService.design = this.design;
      this.dataService.management = this.management;
      this.dataService.editorial = this.editorial;
      this.dataService.print()
      // this.products = data;
    })
  }

  ngOnInit(){
    console.log('dikha');
  }

}
