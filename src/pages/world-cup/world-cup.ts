import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movies/movies'
/**
 * Generated class for the WorldCupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-world-cup',
  templateUrl: 'world-cup.html',
})
export class WorldCupPage {

  movies: any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:MovieProvider) {
  }

  ionViewDidLoad(){
    this.fb.getMovies().subscribe(data =>
    {
    this.movies = data.Search;
    });

    
  }}