import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTable6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table6',
  templateUrl: 'league-table6.html',
})
export class LeagueTable6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTable6Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueTable7Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueTable5Page');
  }

}
