import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(public data: DataProvider) {
  }

}