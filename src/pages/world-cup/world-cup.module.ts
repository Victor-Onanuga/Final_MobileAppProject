import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorldCupPage } from './world-cup';

@NgModule({
  declarations: [
    WorldCupPage,
  ],
  imports: [
    IonicPageModule.forChild(WorldCupPage),
  ],
})
export class WorldCupPageModule {}
