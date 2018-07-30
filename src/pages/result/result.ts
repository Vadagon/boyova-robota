import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(public data: DataProvider, public navParams: NavParams, public navCtrl: NavController) {
  	console.log(navParams.data)
  }
  ionViewCanLeave(): boolean{
	this.navCtrl.popTo(this.navCtrl.getByIndex(1), {animate:false, duration: 0});
  }

}