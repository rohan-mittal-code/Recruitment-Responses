import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
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

  photography2 = [];
  cse2 = [];
  ece2 = [];
  editorial2 = [];
  management2 = [];
  design2 = [];

  userValue = undefined;
  csesubject = new Subject<any>();
  photographysubject = new Subject<any>();
  ecesubject = new Subject<any>();
  editorialsubject = new Subject<any>();
  managementsubject = new Subject<any>();
  designsubject = new Subject<any>();
  csesubject2 = new Subject<any>();
  photographysubject2 = new Subject<any>();
  ecesubject2 = new Subject<any>();
  editorialsubject2 = new Subject<any>();
  managementsubject2 = new Subject<any>();
  designsubject2 = new Subject<any>();
  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {
    this.fetchData();
  }
  fetchData() {
    this.photography = [];
    this.cse = [];
    this.ece = [];
    this.editorial = [];
    this.management = [];
    this.design = [];
    this.photography2 = [];
    this.cse2 = [];
    this.ece2 = [];
    this.editorial2 = [];
    this.management2 = [];
    this.design2 = [];
    this.db.list('/').valueChanges().subscribe((data: any) => {
      // })
      // this.httpClient.get("../../assets/responsesData.json").subscribe(data => {
      var i, j;
      for (i in data) {
        for (j in data[i].correctAnswers) {
          let c = data[i].correctAnswers[j];
          if (data[i].correctAnswers[j].domain === 'cse') {
            if (data[i].registration.startsWith('20')) {
              this.cse2.push(data[i]);
            } else {
              this.cse.push(data[i]);
            }
          } else if (data[i].correctAnswers[j].domain === 'ece') {
            if (data[i].registration.startsWith('20')) {
              this.ece2.push(data[i]);
            } else {
              this.ece.push(data[i]);
            }
          } else if (data[i].correctAnswers[j].domain === 'design') {
            if (data[i].registration.startsWith('20')) {
              this.design2.push(data[i]);
            } else {
              this.design.push(data[i]);
            }
          } else if (data[i].correctAnswers[j].domain === 'photography') {
            if (data[i].registration.startsWith('20')) {
              this.photography2.push(data[i]);
            } else {
              this.photography.push(data[i]);
            }
          } else if (data[i].correctAnswers[j].domain === 'management') {
            if (data[i].registration.startsWith('20')) {
              this.management2.push(data[i]);
            } else {
              this.management.push(data[i]);
            }
          } else if (data[i].correctAnswers[j].domain === 'editorial') {
            if (data[i].registration.startsWith('20')) {
              this.editorial2.push(data[i]);
            } else {
              this.editorial.push(data[i]);
            }

          }
        }
      }
      this.print();
    });
  }
  print() {
    this.csesubject.next(this.cse);
    this.ecesubject.next(this.ece);
    this.photographysubject.next(this.photography);
    this.designsubject.next(this.design);
    this.editorialsubject.next(this.editorial);
    this.managementsubject.next(this.management);
    this.csesubject2.next(this.cse2);
    this.ecesubject2.next(this.ece2);
    this.photographysubject2.next(this.photography2);
    this.designsubject2.next(this.design2);
    this.editorialsubject2.next(this.editorial2);
    this.managementsubject2.next(this.management2);
  }
}
