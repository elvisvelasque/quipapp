import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { estrategiasPrecio } from './estrategiasPrecio/estrategiasPrecio';
import {estratpreciopreg} from './estrategiasPrecio/estratpreciopreg/estratpreciopreg'


@Component({
  selector: 'estrategias-lists',
  templateUrl: 'estrategias.html'
})
export class estrategias{

  constructor(public navCtrl: NavController, public navParams: NavParams,) {}

abrirestrategiasPrecio(){
	this.navCtrl.push(estratpreciopreg);
}

}
