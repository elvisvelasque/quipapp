import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { compraspage } from '../pages/compras/compras';
import { proveedorespage } from '../pages/proveedores/proveedores';
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
import { estratpreciopreg } from '../pages/estrategias/estratpreciopreg/estratpreciopreg';
import { clientespage } from '../pages/clientes/clientes';
import { marketing } from '../pages/marketing/marketing';
import { chatpakitapage } from '../pages/chatPakita/chatPakita';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ventaspage,
   // inventariopage,
    compraspage,
    ratiospage,
    proveedorespage,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
    ventaProyecciones,
    ventasEstrategias,
    comprasPeriodo,
    comprasProyecciones,
    comprasEstrategias,
    estrategias,
    estratpreciopreg,
    clientespage,
    chatpakitapage,
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
    proveedorespage,
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
    estratpreciopreg,
    clientespage,
    chatpakitapage,
    marketing,
  ],
  providers: [InvoiceProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
