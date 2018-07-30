import { Component } from '@angular/core';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public data: DataProvider) {
  }

}