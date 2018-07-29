import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  version: Observable<any>;
  constructor(public db: AngularFireDatabase, public data: DataProvider, public modalCtrl: ModalController) {
    // this.version = db.object('/').valueChanges();
    this.version = data.getData()
  }

}