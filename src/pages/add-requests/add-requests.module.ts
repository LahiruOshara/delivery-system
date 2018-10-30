import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRequestsPage } from './add-requests';

@NgModule({
  declarations: [
    AddRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRequestsPage),
  ],
})
export class AddRequestsPageModule {}
