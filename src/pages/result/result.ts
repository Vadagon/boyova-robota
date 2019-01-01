import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(public data: DataProvider, public navParams: NavParams, public navCtrl: NavController) {
  	if(this.navParams.data.level == 3){
  		this.navParams.data.data = [...this.navParams.data.data.level1, ...this.navParams.data.data.level2];
  	}
  	console.log(this.navParams.data)
  }
  ionViewCanLeave(){
	this.navCtrl.popTo(this.navCtrl.getByIndex(1), {animate:false, duration: 0});
  }

}
