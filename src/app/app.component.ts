import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { compraspage } from '../pages/compras/compras';
import { metaspage } from '../pages/metas/metas';
import { resumenpage } from '../pages/resumen/resumen';
import { proveedorespage } from '../pages/proveedores/proveedores';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { estrategias } from '../pages/estrategias/estrategias';
import { clientespage } from '../pages/clientes/clientes';
import { chatpakitapage } from '../pages/chatPakita/chatPakita';
import { InvoiceProvider } from '../providers/InvoiceProvider';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  pages: Array<{ title: string, component: any, badge: string, icon: string }> = [];

  pages2: Array<{ title: string, component: any}> = [];

  constructor(platform: Platform, public menuCtrl: MenuController,public invoice: InvoiceProvider) {

    this.pages = [
      { title: 'Inicio', component: HomePage, badge: 'Nuevo', icon: 'home' },
      { title: 'Ventas', component: ventaspage, badge: '', icon: 'pricetag' },
      { title: 'ChatPakita', component: chatpakitapage, badge: '', icon: 'chatbubbles' },
      { title: 'Clientes', component: clientespage, badge: '', icon: 'people' },
      { title: 'Compras', component: compraspage, badge: '', icon: 'cart' },
      { title: 'Metas', component: metaspage, badge: '', icon: 'flag' },
      { title: 'Proveedores', component: proveedorespage, badge: '', icon: 'people' },
      { title: 'Estrategias', component: estrategias, badge: '', icon: 'home' },
      { title: 'Subir Facturas', component: resumenpage, badge: '', icon: 'home' },
      //{ title: 'Cerrar sesion', component: , badge: '', icon: 'log-out' },


    ];


    this.pages2 = [
      { title: 'Login', component: LoginSliderPage},

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: { title: string, component: any }): void {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }

}
