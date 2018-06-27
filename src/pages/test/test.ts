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
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  timer:any;
  timeString:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  	this.navCtrl.push(pathes[path], data);
  }

}