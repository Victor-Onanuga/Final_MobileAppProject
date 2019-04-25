import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTable3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table3',
  templateUrl: 'league-table3.html',
})
export class LeagueTable3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTable3Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueTable4Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueTable2Page');
  }

}
