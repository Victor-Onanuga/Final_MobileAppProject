import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueLegendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-legends',
  templateUrl: 'league-legends.html',
})
export class LeagueLegendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueLegendsPage');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueLegends2Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('PremierLeaguePage');
  }

}
