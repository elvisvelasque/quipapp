import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'estratpreciopreg-lists',
  templateUrl: 'estratpreciopreg.html'
})
export class estratpreciopreg{

    type:string;
  pages: Array<{ title: string}> = [];

  pages2: Array<{ title: string}> = [];



  constructor(public navCtrl: NavController, public navParams: NavParams,) {

  	    this.pages = [
      { title: '¿El competidor vario su precio?'},
      { title: '¿Reducir el precio afectara de manera negativa nuestra participacion en el mercado y las utilidades?'},
      { title: '¿Podemos/debemos tomar medidas eficaces?'},
      { title: 'Mantenr el precio actual; seguir vigilando el precio del competidor'},
      { title: 'Reducir el precio'},
      { title: 'Incrementar el valor percibido'},
      { title: 'Mejorar la calidad y aumentar el precio'},
      { title: 'Lanzar una marca de pelea con precio bajo'},
 
    ];

  	    this.pages2 = [
      { title: 'Reducir el precio'},
      { title: 'Incrementar el valor percibido'},
      { title: 'Mejorar la calidad y aumentar el precio'},
      { title: 'Lanzar una marca de pelea con precio bajo'},
 
    ];

       this.type = "preg1";

  }

   preg2(){
    this.type="preg2";

  }

      preg3(){
    this.type="preg3";
}
   salida1(){
    this.type="salida1";
}
   salida2(){
    this.type="salida2";
}


}
