import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueTable2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-table2',
  templateUrl: 'league-table2.html',
})
export class LeagueTable2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTable2Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('LeagueTable3Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('LeagueTablePage');
  }

}
