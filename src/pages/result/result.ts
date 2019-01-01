import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {


  constructor(public data: DataProvider, public navParams: NavParams, public navCtrl: NavController, private storage: Storage) {
  	if(this.navParams.data.level == 3){
  		this.navParams.data.data = [...this.navParams.data.data.level1, ...this.navParams.data.data.level2];
      this.data.results['course'+this.navParams.data.course].feed.push({
        date: new Date(),
        answers: this.navParams.data.data
      })
      console.log(this.data.results);
      this.storage.set('results', this.data.results);
  	}else{
      var res = data.results['course'+navParams.data.course];
      res.feed.map(e=>{
        e.score = 0;
        e.maxScore = 0;
        e.answers.forEach(el=>{
          if(el.answers){
            if(el.answered) e.score += this.data.data['course'+navParams.data.course].test.level1.value;
            e.maxScore += this.data.data['course'+navParams.data.course].test.level1.value;
          }else{
            if(el.answered) e.score += this.data.data['course'+navParams.data.course].test.level2.value;
            e.maxScore += this.data.data['course'+navParams.data.course].test.level2.value;
          }
        })
        return e;
      })
    }
  }
  ionViewCanLeave(){
	this.navCtrl.popTo(this.navCtrl.getByIndex(1), {animate:false, duration: 0});
  }

}
