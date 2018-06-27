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
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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