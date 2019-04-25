import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeagueLegendsPage } from './league-legends';

@NgModule({
  declarations: [
    LeagueLegendsPage,
  ],
  imports: [
    IonicPageModule.forChild(LeagueLegendsPage),
  ],
})
export class LeagueLegendsPageModule {}
