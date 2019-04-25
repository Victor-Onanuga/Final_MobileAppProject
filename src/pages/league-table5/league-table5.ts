import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTable5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table5',
  templateUrl: 'league-table5.html',
})
export class LeagueTable5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTable5Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueTable6Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueTable4Page');
  }

}
