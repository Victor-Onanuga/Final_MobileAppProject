import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PremierLeaguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-premier-league',
  templateUrl: 'premier-league.html',
})
export class PremierLeaguePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PremierLeaguePage');
  }

  openLeagueTable()
  {
    this.navCtrl.push('LeagueTablePage');
  }

  openTopScorers()
  {
    this.navCtrl.push('TopScorersPage');
  }

  openLeagueLegends()
  {
    this.navCtrl.push('LeagueLegendsPage');
  }

  backtoHome()
  {
    this.navCtrl.push('WorldCupPage');
  }

}
