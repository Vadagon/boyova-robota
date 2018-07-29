import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-level2',
  templateUrl: 'level2.html',
})
export class Level2Page {

  constructor(public data: DataProvider) {
  }

}