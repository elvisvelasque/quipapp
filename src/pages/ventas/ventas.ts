import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'ventas-lists',
  templateUrl: 'ventas.html'
})
export class ventaspage{
  public backgroundImage = 'assets/img/nube3.png';

  public bestCustomer : string = "Maricos Villamar S.A.C";
  public bestProduct : string = "Atún procesado";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {
  }
}
