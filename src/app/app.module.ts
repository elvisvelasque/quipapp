import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { compraspage } from '../pages/compras/compras';
import { costospage } from '../pages/costos/costos';
//import { inventariopage } from '../pages/inventario/inventario';
import { proveedorespage } from '../pages/proveedores/proveedores';
import { proveedoresInfo } from '../pages/proveedores/proveedoresInfo/proveedoresInfo';
import { ratiospage } from '../pages/ratios/ratios';
import { resumenpage } from '../pages/resumen/resumen';
import { InvoiceProvider } from '../providers/InvoiceProvider';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { ventasPeriodo } from '../pages/ventas/ventasPeriodo/ventasPeriodo';
import { ventaProyecciones } from '../pages/ventas/ventaProyecciones/ventaProyecciones';
import { ventasEstrategias } from '../pages/ventas/ventasEstrategias/ventasEstrategias';
import { comprasPeriodo } from '../pages/compras/comprasPeriodo/comprasPeriodo';
import { comprasProyecciones } from '../pages/compras/comprasProyecciones/comprasProyecciones';
import { comprasEstrategias } from '../pages/compras/comprasEstrategias/comprasEstrategias';
import { estrategias } from '../pages/estrategias/estrategias';
import { estrategiasPrecio } from '../pages/estrategias/estrategiasPrecio/estrategiasPrecio';
import { estratpreciopreg } from '../pages/estrategias/estrategiasPrecio/estratpreciopreg/estratpreciopreg';
import { estratprecioideal } from '../pages/estrategias/estrategiasPrecio/estratprecioideal/estratprecioideal';
import { clientespage } from '../pages/clientes/clientes';
import { marketing } from '../pages/marketing/marketing';
import { consejosgeneralespage } from '../pages/consejosGenerales/consejosGenerales';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ventaspage,
    costospage,
   // inventariopage,
    compraspage,
    ratiospage,
    proveedorespage,
    proveedoresInfo,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
    ventaProyecciones,
    ventasEstrategias,
    comprasPeriodo,
    comprasProyecciones,
    comprasEstrategias,
    estrategias,
    estrategiasPrecio,
    estratpreciopreg,
    estratprecioideal,
    clientespage,
    consejosgeneralespage,
    marketing,
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
  //  inventariopage,
    proveedorespage,
    proveedoresInfo,
    compraspage,
    ratiospage,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
    ventaProyecciones,
    ventasEstrategias,
    comprasPeriodo,
    comprasProyecciones,
    comprasEstrategias,
    estrategias,
    estrategiasPrecio,
    estratpreciopreg,
    estratprecioideal,
    clientespage,
    consejosgeneralespage,
    marketing,
  ],
  providers: [InvoiceProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
