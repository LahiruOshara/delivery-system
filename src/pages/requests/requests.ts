import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service'
//import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class RequestsPage {

  list: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private provider: FirebaseServiceProvider,
    private db: AngularFireDatabase) {
    this.db.list('/RequestsList/').valueChanges().subscribe(x => {
      this.list = x;
      console.log(this.list);
    });
  }

  ionViewDidLoad() {
        console.log('ionViewDidLoad RequestsPage');
      }



}
