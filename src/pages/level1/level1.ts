import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-level1',
  templateUrl: 'level1.html',
})
export class Level1Page {
  num:any;
  stored:any;
  genQuests:any;
  next:any;
  redirecting:boolean = false;
  constructor(public data: DataProvider, public navParams: NavParams) {
    this.num = 0;
    this.stored = data.data['course'+navParams.data.course].level1;
    this.stored = this.stored.map((el, id)=>{
      el.inId = id
      return el;
    })
    function shuffleArray(array) {
      var array = JSON.parse(JSON.stringify(array));
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    this.genQuests = shuffleArray(this.stored).map((el, id)=>{
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
    this.next = (x, id) => {
      if(this.redirecting) return;
      if(this.stored[this.genQuests[this.num].inId].answers[0] == x){
        this.genQuests[this.num].answers[id].color = "secondary";
        this.genQuests[this.num].answers[id].answered = !0;
      }else{
        this.genQuests[this.num].answers[id].answered = !1;
        this.genQuests[this.num].answers.forEach((el, iid)=>{
          if(el.text == this.stored[this.genQuests[this.num].inId].answers[0])
            this.genQuests[this.num].answers[iid].color = "secondary";
        })
        this.genQuests[this.num].answers[id].color = "danger";
      }
      this.redirecting = !0;
      setTimeout(() => {
        this.stored.length > this.num + 1 ? this.num++ : data.openPage('result', {data: this.genQuests});
        this.redirecting = !1;
      }, 1400);

    }
  }
  
}