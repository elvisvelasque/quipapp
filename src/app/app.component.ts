import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { costospage } from '../pages/costos/costos';
import { inventariopage } from '../pages/inventario/inventario';
import { ratiospage } from '../pages/ratios/ratios';
import { resumenpage } from '../pages/resumen/resumen';
import { proveedorespage } from '../pages/proveedores/proveedores';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { estrategias } from '../pages/estrategias/estrategias';
import {clientespage} from '../pages/clientes/clientes';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  pages: Array<{ title: string, component: any, badge: string, icon: string }> = [];

  pages2: Array<{ title: string, component: any}> = [];

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      { title: 'Inicio', component: HomePage, badge: 'Nuevo', icon: 'home' },
      { title: 'Ventas', component: ventaspage, badge: '', icon: 'home' },
      { title: 'ChatPakita', component: costospage, badge: '', icon: 'home' },
      { title: 'Clientes', component: clientespage, badge: '', icon: 'home' },
      { title: 'Inventario', component: inventariopage, badge: '', icon: 'home' },
      { title: 'Ratios', component: ratiospage, badge: '', icon: 'home' },
      { title: 'Resumen', component: resumenpage, badge: '', icon: 'home' },
      { title: 'Proveedores', component: proveedorespage, badge: '', icon: 'home' },
      { title: 'Estrategias', component: estrategias, badge: '', icon: 'home' },

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
