import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { DataProvider, shuffleArray, randomBetween } from '../../providers/data/data';
import { prepQuests, genQuests } from '../level1/level1';
import { genProblems } from '../level2/level2';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  timer:any;
  timeString:any;
  type:any = 1;
  num:number = 0;
  answer: any = '';
  quests: any = {level1:[], level2: []};
  constructor(public data: DataProvider, public navParams: NavParams) {

    this.timer = 60*10;
    this.timeString = '00:00'
    setInterval(() => { 
      this.timer--;
      this.timeString = Math.floor(this.timer/60) + ':'
      var x = this.timer - Math.floor(this.timer/60)*60; 
      if (x < 10){
        this.timeString += '0' + x;
      }else{
        this.timeString += x;
      }
    }, 1000);

    this.course = data.data['course'+navParams.data.course];

    this.quests.stored = prepQuests(shuffleArray(this.course.level1).slice(0, this.course.test.level1.count))
    this.quests.level1 = genQuests(this.quests.stored)

    this.quests.level2 = genProblems(shuffleArray(this.course.level2).slice(0, this.course.test.level2.count))
    console.log(this.quests)
  }

  next(x?, id?){
    if(this.type == 1){  
      if(this.quests.stored[this.quests.level1[this.num].inId].answers[0] == x){
        this.quests.level1[this.num].answers[id].answered = !0;
      }else{
        this.quests.level1[this.num].answers[id].answered = !1;
      }
      this.num++
      if(this.quests.level1.length < this.num + 1) this.type = 2;
    }else if(this.type == 2){
      var answer = parseFloat(this.answer.replace(/[^0-9.,]/ig).replace(',', '.').trim());
      this.answer = '';
      this.quests.level2[this.num-this.quests.level1.length].answered = (answer==this.quests.level2[this.num-this.quests.level1.length].answer);

      (this.quests.level1.length + this.quests.level2.length) > this.num + 1 ? this.num++ : this.data.openPage('result', {course: navParams.data.course, level: 3, data: this.quests})
    }
    console.log(this.num-this.quests.level1.length)
  }

}