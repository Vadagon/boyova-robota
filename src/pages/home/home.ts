import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage as home  } from '../home/home';
import { CoursePage as course  } from '../course/course';
import { Level1Page as level1  } from '../level1/level1';
import { Level2Page as level2  } from '../level2/level2';
import { AuthorsPage as authors  } from '../authors/authors';
import { SettingsPage as settings  } from '../settings/settings';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  version: Observable<any>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.version = db.object('version').valueChanges();
  }

  openPage(path, data?){
  	let pathes = {
  	  home: home,
      course: course,
      level1: level1,
      level2: level2,
      authors: authors,
      settings: settings
  	};
  	this.navCtrl.push(pathes[path], data);
  }

}