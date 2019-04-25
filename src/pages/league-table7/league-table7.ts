import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTable7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table7',
  templateUrl: 'league-table7.html',
})
export class LeagueTable7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTable7Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueTable8Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueTable6Page');
  }

}
