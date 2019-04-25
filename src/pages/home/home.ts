import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPremierLeague()
  {
    this.navCtrl.push('PremierLeaguePage');
  }

  openChampionsLeague()
  {
    this.navCtrl.push('ChampionsLeaguePage');
  }

  openWorldCup()
  {
    this.navCtrl.push('WorldCupPage');
  }

}
