import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ventaspage } from '../pages/ventas/ventas';
import { costospage } from '../pages/costos/costos';
import { inventariopage } from '../pages/inventario/inventario';
import { ratiospage } from '../pages/ratios/ratios';
import { resumenpage } from '../pages/resumen/resumen';
import { InvoiceProvider } from '../providers/InvoiceProvider';
import { LoginSliderPage } from '../pages/login-slider/login-slider';
import { ventasPeriodo } from '../pages/ventas/ventasPeriodo/ventasPeriodo';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ventaspage,
    costospage,
    inventariopage,
    ventaspage,
    ratiospage,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
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
    ventaspage,
    ratiospage,
    resumenpage,
    LoginSliderPage,
    ventasPeriodo,
  ],
  providers: [InvoiceProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
