import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-level2',
  templateUrl: 'level2.html',
})
export class Level2Page {
  
  task: any;
  num: any = 0;
  answer: any;
  constructor(public data: DataProvider, public navParams: NavParams) {
  	this.task = JSON.parse(JSON.stringify(data.data['course'+navParams.data.course].level2));
  	this.task = this.task.map((el)=>{
  		el.options = el.options.map((ell)=>{
  			ell.value = data.randomBetween(ell.value[0], ell.value[1])  
  			return ell;
  		})
  		el.answer = el.answer.replace(/\B\$\S/gi, (ell)=>{
  			ell = el.options[parseInt(ell.replace('$', ''))].value;
  			return ell;
  		})
  		el.answer = eval(el.answer)
  		el.answered = !1;
  		return el;
  	})
  	console.log(this.task)
  }
  next(){
  	var answer = parseInt(this.answer)
  	this.answer = '';
  	this.task[this.num].answered = answer==this.task[this.num].answer

  	this.task.length > this.num + 1 ? this.num++ : this.data.openPage('result', {data: this.task});
  }

}