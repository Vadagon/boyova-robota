import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { Subject } from "rxjs"
import 'rxjs/add/operator/take';



/*
Generated class for the DataProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class DataProvider {

  	data: any = {};
  	public currentPage = new Subject();
  	constructor(public db: AngularFireDatabase, private storage: Storage, public loadingCtrl: LoadingController) {
  		storage.get('data').then((val) => {
  			if(val){
  				this.data = val;
  				console.log(this.data)
  			}else{
				var loading = this.loadingCtrl.create({
					content: 'Обовязкова перша підгрузка питань з бази данних...'
				});
				loading.present();
				this.db.object('/').valueChanges().take(1).subscribe(data => {
					this.data = data;
					storage.set('data', data);
					setTimeout(()=>{
						loading.dismiss();
					}, 2500)
				})
			}
		});
	}

	getData(){
		return this.db.object('/').valueChanges().take(1);
	}
	loadingStart(){
		var loading = this.loadingCtrl.create({
			content: 'Оновлення питань...'
		});
		loading.present();
		this.db.object('/').valueChanges().take(1).subscribe(data => {
			this.data = data;
			this.storage.set('data', data);
			setTimeout(()=>{
				loading.dismiss();
			}, 2500)
		})
	}

	openPage(path, data?){
		this.currentPage.next(arguments);
	}




}

export function shuffleArray(array) {
  var array = JSON.parse(JSON.stringify(array));
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export function randomBetween(min,max){
	min = parseInt(min)
	max = parseInt(max)
    return Math.floor(Math.random()*(max-min+1)+min);
}