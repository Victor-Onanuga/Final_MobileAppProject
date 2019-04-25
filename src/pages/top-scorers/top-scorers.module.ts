import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopScorersPage } from './top-scorers';

@NgModule({
  declarations: [
    TopScorersPage,
  ],
  imports: [
    IonicPageModule.forChild(TopScorersPage),
  ],
})
export class TopScorersPageModule {}
