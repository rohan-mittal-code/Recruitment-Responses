import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  photography = [];
  cse = [];
  ece = [];
  editorial = [];
  management = [];
  design = [];
  userValue = undefined;
  csesubject = new Subject<any>();
  photographysubject = new Subject<any>();
  ecesubject = new Subject<any>();
  editorialsubject = new Subject<any>();
  managementsubject = new Subject<any>();
  designsubject = new Subject<any>();
  constructor(private httpClient: HttpClient) {
    this.fetchData();
    // console.log('finall');
    // console.log(this.cse);
    // console.log(this.ece);
    // console.log(this.design);
    // console.log(this.photography);
    // console.log(this.management);
    // console.log(this.editorial);
  }
  fetchData() {
    console.log('in fetch');
    this.photography = [];
    this.cse = [];
    this.ece = [];
    this.editorial = [];
    this.management = [];
    this.design = [];

    this.httpClient.get("../../assets/responsesData.json").subscribe(data => {
      var i, j;
      for (i in data) {
        // console.log(data[i]);
        for (j in data[i].correctAnswers) {
          let c = data[i].correctAnswers[j];
          // console.log(c);
          if (data[i].correctAnswers[j].domain === 'cse') {
            this.cse.push(data[i]);
          } else if (data[i].correctAnswers[j].domain === 'ece') {
            this.ece.push(data[i]);
          } else if (data[i].correctAnswers[j].domain === 'design') {
            this.design.push(data[i]);
          } else if (data[i].correctAnswers[j].domain === 'photography') {
            this.photography.push(data[i]);
          } else if (data[i].correctAnswers[j].domain === 'management') {
            this.management.push(data[i]);
          } else if (data[i].correctAnswers[j].domain === 'editorial') {
            this.editorial.push(data[i]);
          }
        }
      }
      this.print();
    });
  }
  print() {
    // console.log('finall');
    // console.log(this.ece);
    // console.log(this.design);
    // console.log(this.photography);
    // console.log(this.management);
    // console.log(this.editorial);
    this.csesubject.next(this.cse);
  }
}
