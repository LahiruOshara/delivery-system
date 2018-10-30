//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as CryptoTS from 'crypto-ts';
//import{ Http} from '@angular/http';

@Injectable()
export class FirebaseServiceProvider {

  current_user:any

  constructor(//public http: HttpClient,
    private db:AngularFireDatabase) {}

  getPasswordDecrypted(email){
    this.db.list('/user/', ref => ref.orderByChild('email').equalTo(email)).valueChanges().subscribe(x => {
      this.current_user = x[0];});
    if (this.current_user != null) {
      console.log("here");
      // Decript & Validating Password
     /* const dec_userpass_array  = CryptoTS.AES.decrypt(this.current_user.password, '#453%678[]#$%^&*%69827849');
      const dec_userpass = dec_userpass_array.toString(CryptoTS.enc.Utf8);*/
      console.log(this.current_user.password);
      return this.current_user.password;
    }
    return false;

  }

  register(){


  }

  addRequest(request){
    this.db.list('/RequestsList/').push(request);
    return true;
  }

  getRequestList(){
    return this.db.list('/RequestsList/');
  }

  deleteRequest(id){
    this.db.list('/RequestsList/').remove(id);
    return true;
  }


}
