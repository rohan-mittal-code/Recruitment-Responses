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
  constructor() {
    console.log('finall');
    console.log(this.cse);
    console.log(this.ece);
    console.log(this.design);
    console.log(this.photography);
    console.log(this.management);
    console.log(this.editorial);
  }
  print(){
    console.log('finall');
    console.log(this.cse);
    console.log(this.ece);
    console.log(this.design);
    console.log(this.photography);
    console.log(this.management);
    console.log(this.editorial);
    this.csesubject.next(this.cse);
  }
}
