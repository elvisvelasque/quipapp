import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { ventaspage } from '../ventas/ventas';
import { proveedorespage } from '../proveedores/proveedores';
//import { inventariopage } from '../inventario/inventario';
import { compraspage } from '../compras/compras';
import { metaspage } from '../metas/metas';
import { resumenpage } from '../resumen/resumen';
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { estrategias } from '../estrategias/estrategias';
import { clientespage } from '../clientes/clientes';
import { marketing } from '../marketing/marketing';
import { chatpakitapage } from '../chatPakita/chatPakita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public headerName: string = "Invitado";
  public IsLogged: boolean = true;

  i_items: Array<any> = [];
  public backgroundImage = 'assets/img/background.png';

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public invoice: InvoiceProvider
    ) {
  }
  
  abrirventas() {
    this.navCtrl.push(ventaspage);
  }

  abrircompras() {
    this.navCtrl.push(compraspage);
  }

  abrirchat() {
    this.navCtrl.push(chatpakitapage);
  }

  abrirratios() {
    this.navCtrl.push(metaspage);
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

  abrirmarketing() {
    this.navCtrl.push(marketing);
  }

ionViewDidLoad() {
    this.platform.ready().then(() => {
        this.headerName = this.invoice.name;
    });
  }

}
