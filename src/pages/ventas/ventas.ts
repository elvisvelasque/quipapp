import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { ventasPeriodo } from './ventasPeriodo/ventasPeriodo';
import { ventaProyecciones } from './ventaProyecciones/ventaProyecciones';

import chartJs from 'chart.js';


@Component({
  selector: 'ventas-lists',
  templateUrl: 'ventas.html'
})
export class ventaspage{

  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('pieCanvas') pieCanvas;

  doughnutChart: any;
  pieChart: any;
  i_items: Array<any> = [];
  p_items: Array<any> = [];
  prov_items: Array<any> = [];

  public backgroundImage = 'assets/img/nube3.png';

  public bestCustomer : string = "Maricos Villamar S.A.C";
  public bestProduct : string = "Atún procesado";
  public RUC: number = 20480072872;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public invoice: InvoiceProvider)
  {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log("after view init");
    }, 1000);
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }


  getPieChart() {
    const data = {
      labels: [this.p_items["Nombre"][0], "Otros"],
      datasets: [
        {
          data: [this.p_items["Datas"][0], this.getOtros(this.p_items["Datas"], 1)],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  getOtros(list: any[], num: number) {
    let suma: number = 0;
    for (var i = 0; i < list.length; i++) {
      if (i >= num) {
        suma = suma + list[i];
      }
    }
    return suma;
  }

  abrirVentasPeriodo(){
   this.navCtrl.push(ventasPeriodo);
  }

  abrirVentasProyecciones(){
   this.navCtrl.push(ventaProyecciones);
  }


  getDoughnutChart() {
    const data = {
      labels: [this.prov_items["Nombre"][0], "Otros"],
      datasets: [
      {
        data: [this.prov_items["Datas"][0], this.getOtros(this.prov_items["Datas"], 1)],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getInvoices();
      this.getProducts();
      this.getProviders();
    });
  }



  getInvoices() {
    this.i_items = [];
    this.invoice.GetAllInvoices().then(
      data => {
        if (data) {
          this.i_items = data;
          console.log("ventas.ts");
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


  getProducts() {
    this.p_items = [];
    this.invoice.GetProductSales().then(
      data => {
        if (data) {
          this.p_items = data;
          console.log("PRODUCTOS");
          console.log(this.p_items);
          this.pieChart = this.getPieChart();
          document.getElementById("porc").textContent = "El producto mas vendido es " + this.p_items["Nombre"][0] + ", con " + Math.round(this.p_items["Datas"][0]) + " %";
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

  getProviders() {
    this.prov_items = [];
    this.invoice.GetProvidersSales().then(
      data => {
        if (data) {
          this.prov_items = data;
          console.log("PROVIDERS");
          console.log(this.prov_items);
          this.doughnutChart = this.getDoughnutChart();
          document.getElementById("porcprov").textContent = "El cliente mas vendido es " + this.prov_items["Nombre"][0] + ", con " +Math.round(this.prov_items["Datas"][0]) + " %";
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
