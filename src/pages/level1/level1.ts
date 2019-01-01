import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { DataProvider, shuffleArray } from '../../providers/data/data';

@Component({
  selector: 'page-level1',
  templateUrl: 'level1.html',
})
export class Level1Page {
  num:any;
  stored:any;
  quests:any;
  redirecting:boolean = false;
  constructor(public data: DataProvider, public navParams: NavParams) {
    this.num = 0;
    this.stored = prepQuests(this.data.data['course'+navParams.data.course].level1);
    this.quests = genQuests(this.stored)
  }

  next(x, id) {
    if(this.redirecting) return;
    this.quests[this.num].answeredText = x;
    if(this.stored[this.quests[this.num].inId].answers[0] == x){
      this.quests[this.num].answers[id].color = "secondary";
      this.quests[this.num].answered = !0;
    }else{
      this.quests[this.num].answered = !1;
      this.quests[this.num].answers.forEach((el, iid)=>{
        if(el.text == this.stored[this.quests[this.num].inId].answers[0])
          this.quests[this.num].answers[iid].color = "secondary";
      })
      this.quests[this.num].answers[id].color = "danger";
    }
    this.redirecting = !0;
    setTimeout(() => {
      this.stored.length > this.num + 1 ? this.num++ : this.data.openPage('result', {course: this.navParams.data.course, level: 1, data: this.quests});
      this.redirecting = !1;
    }, 1400);
  }

}

export function prepQuests(e){
  console.log(e);
  return e.map((el, id)=>{
    el.inId = id;
    el.trueAnswer = el.answers[0];
    return el;
  })
}
export function genQuests(e){
  return shuffleArray(e).map((el, id)=>{
    el.id = id + 1;

    el.answers = shuffleArray(el.answers).map((ans)=>{
      ans = {
        text: ans,
        color: 'primary'
      }
      return ans;
    })
    return el;
  })
}
