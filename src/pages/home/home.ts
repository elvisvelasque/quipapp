import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ventaspage } from '../ventas/ventas'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public backgroundImage = 'assets/img/nube3.png';

  constructor(public navCtrl: NavController) {
    
  }

  abrirventas(){
   this.navCtrl.push(ventaspage);
  }

}
