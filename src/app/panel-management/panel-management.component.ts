import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-panel-management',
  templateUrl: './panel-management.component.html',
  styleUrls: ['./panel-management.component.css']
})
export class PanelManagementComponent implements OnInit {

  panels;
  sub: Subscription;
  constructor(private db: AngularFireDatabase) {
    this.sub = this.db.list('/panels').valueChanges().subscribe(x => {
      this.panels = x;
    })
   }

   alter(){
    //  console.log(this.panels[1]);
     var i;
     for(i in this.panels){
       console.log(this.panels[i]);
       if(this.panels[i].candidate == ''){
        this.panels[i].candidate == '-';
       }
     }
     this.db.object('/panels').update(this.panels);
   }

   ngOnDestroy(){
     this.sub.unsubscribe();
   }
  ngOnInit(): void {
  }

}
