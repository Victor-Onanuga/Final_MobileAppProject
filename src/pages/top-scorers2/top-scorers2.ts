import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopScorers2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-scorers2',
  templateUrl: 'top-scorers2.html',
})
export class TopScorers2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopScorers2Page');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('TopScorers3Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('TopScorersPage');
  }


}
