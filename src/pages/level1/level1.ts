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
      if(this.stored[this.genQuests[this.num].inId].answers[0] == x){
        this.genQuests[this.num].answers[id].color = "secondary";
      }else{
        this.genQuests[this.num].answers.forEach((el, iid)=>{
          if(el.text == this.stored[this.genQuests[this.num].inId].answers[0])
            this.genQuests[this.num].answers[iid].color = "secondary";
        })
        this.genQuests[this.num].answers[id].color = "danger";
      }
      setTimeout(() => { 
        this.stored.length > this.num + 1 ? this.num++ : data.openPage('result');
      }, 2000);

    }
    console.log(this.genQuests)
  }
  
}