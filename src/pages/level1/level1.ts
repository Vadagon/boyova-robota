import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage as home  } from '../home/home';
import { CoursePage as course  } from '../course/course';
import { Level1Page as level1  } from '../level1/level1';
import { Level2Page as level2  } from '../level2/level2';
import { AuthorsPage as authors  } from '../authors/authors';
import { SettingsPage as settings  } from '../settings/settings';
import { TestPage as test  } from '../test/test';
import { ResultPage as result  } from '../result/result';

@Component({
  selector: 'page-level1',
  templateUrl: 'level1.html',
})
export class Level1Page {
  rootPage: any = home;
  num:any;
  stored:any;
  genQuests:any;
  next:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.num = 0;
    this.stored = [
      {
        question: 'Відстань між гарматами на вогневій позиції призначається не ближче ... метрів. Відпоавідь = 25 ',
        answers: ['25', '35', '4asdas5', '15']
      },
      {
        question: '1Відстань між гарматами на вогневій позиції призначається не ближче ... метрів. Відпоавідь = 35',
        answers: ['35', '15', '45', '65']
      },
      {
        question: '1Відстань між гарматами на вогневій позиції призначається не ближче ... метрів. Відпоавідь = 15',
        answers: ['15', '35', '4asd5', '115']
      },
      {
        question: '1Відстань між гарматами на вогневій позиції призначається не ближче ... метрів. Відпоавідь = 25a',
        answers: ['25a', '35', '4a5', '15']
      }
    ]
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
        this.stored.length > this.num + 1 ? this.num++ : this.openPage('result');
      }, 2000);

    }
    console.log(this.genQuests)
  }

  openPage(path, data?){
    let pathes = {
      home: home,
      course: course,
      level1: level1,
      level2: level2,
      authors: authors,
      settings: settings,
      result: result,
      test: test
    };
    if(path == 'result'){
      this.navCtrl.pop();   
      this.navCtrl.push(pathes[path], data); 
    }else{
  	 this.navCtrl.push(pathes[path], data);
    }
  }

}