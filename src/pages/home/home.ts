import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { ventaspage } from '../ventas/ventas';
import { costospage } from '../costos/costos';
import { proveedorespage } from '../proveedores/proveedores';
import { inventariopage } from '../inventario/inventario';
import { ratiospage } from '../ratios/ratios';
import { resumenpage } from '../resumen/resumen';
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { estrategias } from '../estrategias/estrategias';
import { clientespage } from '../clientes/clientes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public IsLogged: boolean = true;

  i_items: Array<any> = [];
  public backgroundImage = 'assets/img/nube3.png';

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public invoice: InvoiceProvider) {
  }
  
  abrirventas() {
    this.navCtrl.push(ventaspage);
  }

  abririnventario() {
    this.navCtrl.push(inventariopage);
  }

  abrircostos() {
    this.navCtrl.push(costospage);
  }

  abrirratios() {
    this.navCtrl.push(ratiospage);
  }

  abrirresumen() {
    this.navCtrl.push(resumenpage);
  }

  abrirproveedores() {
    this.navCtrl.push(proveedorespage); 
  }

 abrirestrategias() {
    this.navCtrl.push(estrategias); 
  }

  abrirclientes() {
    this.navCtrl.push(clientespage);
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getInvoices();
    });
  }

  getInvoices() {
    this.i_items = [];
    this.invoice.GetAllInvoices().then(
      data => {
        if (data) {
          this.i_items = data;
          console.log("home.ts");
          console.log(this.i_items);
        } else {
          console.error('Error retrieving weather data: Data object is empty');
        }
      },
      error => {
        //Hide the loading indicator
        console.error('Error retrieving weather data');
        console.dir(error);
      }
    );
  }

}
