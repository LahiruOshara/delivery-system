import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service'

@IonicPage()
@Component({
  selector: 'page-add-requests',
  templateUrl: 'add-requests.html',
})
export class AddRequestsPage {
  
  description:string;
  type:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRequestsPage');
  }

  addItem(){
    const item={
      type:this.type,  
      description:this.description
    }
    this.provider.addRequest(item);
 }


}
