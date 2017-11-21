import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ventaspage } from '../ventas/ventas';
import { costospage } from '../costos/costos';
import { inventariopage } from '../inventario/inventario';
import { ratiospage } from '../ratios/ratios';
import { resumenpage } from '../resumen/resumen';



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

  abririnventario(){
   this.navCtrl.push(inventariopage);
  }

  abrircostos(){
   this.navCtrl.push(costospage);
  }

   abrirratios(){
   this.navCtrl.push(ratiospage);
  }

   abrirresumen(){
   this.navCtrl.push(resumenpage);
  }


}
