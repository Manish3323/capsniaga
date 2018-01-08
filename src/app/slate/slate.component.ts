import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabase, Query } from 'angularfire2/database';
// import { CollectionReference } from '@google-cloud/firestore';
import { Subject } from 'rxjs/Subject';
import { CanvasService } from '../canvas/canvas.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-slate',
  templateUrl: './slate.component.html',
  styleUrls: ['./slate.component.css']
})
export class SlateComponent implements OnInit {

 slateContents = [];
  // slateContents: Observable<any[]>;
  constructor( private canvasService: CanvasService,private userService: UserService) {  }

  ngOnInit() {
    //  this.slateContents = this.db.collection('/courses',ref => {
    //    console.log(ref);
    //  }).valueChanges();
    // this.slateContents = this.db.collection('/courses', ref => {
    //   let query: CollectionReference | Query = ref;
    //   //  query = query.where('impact', '>=', 5);
    //    console.log(query);
    //   return query;
    // }).valueChanges();
    if(this.userService.userType === 'player') {
      this.slateContents =  [ 'No of players', 'My team', 'my strategy', 'View Reports'];
    }else if(this.userService.userType === 'instructor') {
      this.slateContents = ['NO of players', 'Addd Online Quiz', 'View Reports', ' Gam COnfiguration'];
    }
  }
  onAddToCanvas(content: string){
      this.canvasService.onAddToCanvas(content);
  }

}
