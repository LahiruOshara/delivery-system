import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList,} from 'angularfire2/database';
//import { Firebase } from '@ionic-native/firebase';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  requests:any;
  newItem:any;
  constructor(public navCtrl: NavController,
    //private firebase: Firebase, 
    private db: AngularFireDatabase,
    private provider: FirebaseServiceProvider) {
        /*console.log(this.provider.getRequestList().snapshotChanges().subscribe(data=>{
          this.requests=data;
          console.log(this.requests.value);
        }));*/

     }

     addItem(){
        this.provider.addRequest(this.newItem);
     }

     removeItem(id){
       this.provider.deleteRequest(id);
     }

     gotoAdd(){
      this.navCtrl.push('AddRequestsPage');
    }
  
    gotoRequests(){
      this.navCtrl.push('RequestsPage');
    }
    

}
