import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueLegends2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-legends2',
  templateUrl: 'league-legends2.html',
})
export class LeagueLegends2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueLegends2Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueLegends3Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueLegendsPage');
  }


}
