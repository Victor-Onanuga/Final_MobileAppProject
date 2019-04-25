import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopScorersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-scorers',
  templateUrl: 'top-scorers.html',
})
export class TopScorersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopScorersPage');
  }

  openLeagueTable3()
  {
    this.navCtrl.push('TopScorers2Page');
  }
  backToLeagueTable()
  {
    this.navCtrl.push('PremierLeaguePage');
  }

}
