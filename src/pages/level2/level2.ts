import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { DataProvider, randomBetween } from '../../providers/data/data';

@Component({
  selector: 'page-level2',
  templateUrl: 'level2.html',
})
export class Level2Page {
  
  task: any;
  num: any = 0;
  answer: any = '';
  constructor(public data: DataProvider, public navParams: NavParams) {
  	this.task = genProblems(data.data['course'+navParams.data.course].level2);
  }
  next(){
    var answer = parseFloat(this.answer.replace(/[^0-9.,]/ig).replace(',', '.').trim());
    this.answer = '';
    this.task[this.num].answered = (answer==this.task[this.num].answer);

    this.data.showAnswer('Вірна відповідь: <u>'+this.task[this.num].answer+'</u>')
    setTimeout(()=>{
      this.task.length > this.num + 1 ? this.num++ : this.data.openPage('result', {course: this.navParams.data.course, level: 2, data: this.task});
    }, 2000)
  }

}

export function genProblems(e){
  	return JSON.parse(JSON.stringify(e)).map((el)=>{
  		el.options = el.options.map((ell)=>{
  			ell.value = Math.round(randomBetween(ell.value[0], ell.value[1]))
  			return ell;
  		})
      console.log(el)
  		el.answer = el.answer.replace(/\B\$\S/gi, (ell)=>{
  			ell = el.options[parseInt(ell.replace('$', ''))].value;
  			return ell;
  		})
  		el.answer = Math.round(eval(el.answer));
  		el.answered = !1;
  		return el;
  	})

}