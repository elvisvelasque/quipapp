import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { costospage } from '../pages/costos/costos';
import { inventariopage } from '../pages/inventario/inventario';
import { proveedorespage } from '../pages/proveedores/proveedores';
import { proveedoresInfo } from '../pages/proveedores/proveedoresInfo/proveedoresInfo';
import { ratiospage } from '../pages/ratios/ratios';
import { resumenpage } from '../pages/resumen/resumen';
import { InvoiceProvider } from '../providers/InvoiceProvider';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { ventasPeriodo } from '../pages/ventas/ventasPeriodo/ventasPeriodo';
import { ventaProyecciones } from '../pages/ventas/ventaProyecciones/ventaProyecciones';
import { ventasEstrategias } from '../pages/ventas/ventasEstrategias/ventasEstrategias';
import { estrategias } from '../pages/estrategias/estrategias';
import { estrategiasPrecio } from '../pages/estrategias/estrategiasPrecio/estrategiasPrecio';
import { estratpreciopreg } from '../pages/estrategias/estrategiasPrecio/estratpreciopreg/estratpreciopreg';
import { estratprecioideal } from '../pages/estrategias/estrategiasPrecio/estratprecioideal/estratprecioideal';
import {clientespage} from '../pages/clientes/clientes';
import {NativeGoogleMapsPage} from '../pages/geolocalizacion/geolocalizacion';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ventaspage,
    costospage,
    inventariopage,
    ventaspage,
    ratiospage,
    proveedorespage,
    proveedoresInfo,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
    ventaProyecciones,
    ventasEstrategias,
    estrategias,
    estrategiasPrecio,
    estratpreciopreg,
    estratprecioideal,
    clientespage,
    NativeGoogleMapsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ventaspage,
    costospage,
    inventariopage,
    proveedorespage,
    proveedoresInfo,
    ventaspage,
    ratiospage,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
    ventaProyecciones,
    ventasEstrategias,
    estrategias,
    estrategiasPrecio,
    estratpreciopreg,
    estratprecioideal,
    clientespage,
    NativeGoogleMapsPage,
  ],
  providers: [InvoiceProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
