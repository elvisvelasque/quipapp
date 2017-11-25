import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { costospage } from '../pages/costos/costos';
import { inventariopage } from '../pages/inventario/inventario';
import { ratiospage } from '../pages/ratios/ratios';
import { resumenpage } from '../pages/resumen/resumen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  pages: Array<{ title: string, component: any, badge: string, icon: string }> = [];

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      { title: 'Inicio', component: HomePage, badge: 'Nuevo', icon: 'home' },
      { title: 'Ventas', component: ventaspage, badge: '', icon: 'home' },
      { title: 'Costos', component: costospage, badge: '', icon: 'home' },
      { title: 'Inventario', component: inventariopage, badge: '', icon: 'home' },
      { title: 'Ratios', component: ratiospage, badge: '', icon: 'home' },
      { title: 'Resumen', component: resumenpage, badge: '', icon: 'home' },


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
