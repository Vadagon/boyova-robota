import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { DataProvider } from '../../providers/data/data';



@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
  }

}