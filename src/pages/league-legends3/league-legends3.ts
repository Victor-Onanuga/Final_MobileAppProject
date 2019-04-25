import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagueLegends3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-league-legends3',
  templateUrl: 'league-legends3.html',
})
export class LeagueLegends3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueLegends3Page');
  }

  backToLeagueTable()
  {
    this.navCtrl.push('LeagueLegends2Page');
  }
}
