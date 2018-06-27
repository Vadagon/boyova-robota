import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';


import { HomePage as home  } from '../pages/home/home';
import { CoursePage as course  } from '../pages/course/course';
import { Level1Page as level1  } from '../pages/level1/level1';
import { Level2Page as level2  } from '../pages/level2/level2';
import { AuthorsPage as authors  } from '../pages/authors/authors';
import { SettingsPage as settings  } from '../pages/settings/settings';

@Injectable()
export class Globals {

	constructor(public navCtrl: NavController){}
	role: string = 'test';

  // openPage(path) {
  // 	this.navCtrl.push(HomePage);
  // }


  // openPage(path, data?) : void {
  // 	let pathes = {
  // 		home: home,
  //     course: course,
  //     level1: level1,
  //     level2: level2,
  //     authors: authors,
  //     settings: settings
  // 	};
  // 	this.navCtrl.push(pathes[path], data);
  // }


}