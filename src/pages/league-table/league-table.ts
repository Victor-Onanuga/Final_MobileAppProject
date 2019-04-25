import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table',
  templateUrl: 'league-table.html',
})
export class LeagueTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTablePage');
  }

  openLeagueTable2()
  {
    this.navCtrl.push('LeagueTable2Page');
  }
  backToAboutPL()
  {
    this.navCtrl.push('PremierLeaguePage');
  }


}
