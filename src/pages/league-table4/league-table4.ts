import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTable4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table4',
  templateUrl: 'league-table4.html',
})
export class LeagueTable4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTable4Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueTable5Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueTable3Page');
  }

}
