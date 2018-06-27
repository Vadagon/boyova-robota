import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

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


@NgModule({
  declarations: [
    MyApp,
    home,
    course,
    level1,
    level2,
    authors,
    settings,
    result,
    test
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    home,
    course,
    level1,
    level2,
    authors,
    settings,
    result,
    test
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
