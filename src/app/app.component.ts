import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage as home  } from '../pages/home/home';
import { CoursePage as course  } from '../pages/course/course';
import { Level1Page as level1  } from '../pages/level1/level1';
import { Level2Page as level2  } from '../pages/level2/level2';
import { AuthorsPage as authors  } from '../pages/authors/authors';
import { SettingsPage as settings  } from '../pages/settings/settings';
import { TestPage as test  } from '../pages/test/test';
import { ResultPage as result  } from '../pages/result/result';


import { DataProvider } from '../providers/data/data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = home;
  pathes: any = {
    home: home,
    course: course,
    level1: level1,
    level2: level2,
    authors: authors,
    settings: settings,
    result: result,
    test: test,
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public data: DataProvider) {

    data.currentPage.subscribe((e)=>{
      if(!!e && e.constructor !== Array && !e.length) e = ['home'];
      this.openPage(...e)
    })

    this.initializeApp();

  }

  openPage(path, data?){
    this.nav.push(this.pathes[path], data); 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(ListPage);
  // }
}
