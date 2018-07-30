import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public db: AngularFireDatabase, public data: DataProvider) {
  }

}