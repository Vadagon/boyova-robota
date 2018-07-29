import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';

import { Subject } from "rxjs"


/*
Generated class for the DataProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DataProvider {

  	data: any;
  	public currentPage = new Subject();
  	constructor(public db: AngularFireDatabase, private storage: Storage) {
  		console.log(this.data)
  		storage.get('data').then((val) => {
  			if(val){
  				this.data = val;
  			}else{
				// this.getData().subscribe(data => {
			 //    	console.log(data)
			 //    })
			}
		});
	 //  	storage.set('data', );
	 //  	storage.get('name').then((val) => {
		// 	console.log(val);
		// });

		this.db.object('/').valueChanges().subscribe(data => {
			// data.version
			console.log(data)
		})
	}

	getData(){
		return this.db.object('/').valueChanges();
	}
	loadingStart(){
		// let profileModal = this.modalCtrl.create(authors, { userId: 8675309 });
		// profileModal.present();
		this.currentPage.next('zzz');
		// this.viewCtrl.dismiss();
	}

	openPage(path, data?){
		this.currentPage.next(arguments);
	}


}