import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//import { LoginPage} from '../pages/login/login';
import { StartpagePage } from '../pages/startpage/startpage';
import { AddRequestsPage} from '../pages/add-requests/add-requests';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpModule} from '@angular/http';
import {AngularFireModule } from 'angularfire2';
//import {environment} from '../environments/environment';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
  apiKey: "AIzaSyD0ydlg7f-fOuBoKKrqezdKQU9sUSgT9A8",
  authDomain: "delivery-system-61023.firebaseapp.com",
  databaseURL: "https://delivery-system-61023.firebaseio.com",
  projectId: "delivery-system-61023",
  storageBucket: "delivery-system-61023.appspot.com",
  messagingSenderId: "494082202257"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    //HomePage,
    //LoginPage,
    StartpagePage,
    //AddRequestsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
   // IonicPageModule.forChild(HomePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
   // HomePage,
   // LoginPage,
    StartpagePage,
    //AddRequestsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
