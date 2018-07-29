import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public data: DataProvider) {
  }

}