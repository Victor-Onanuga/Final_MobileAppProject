import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionsLeaguePage } from './champions-league';

@NgModule({
  declarations: [
    ChampionsLeaguePage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionsLeaguePage),
  ],
})
export class ChampionsLeaguePageModule {}
