import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { comprasPeriodo } from './comprasPeriodo/comprasPeriodo';
import { comprasProyecciones } from './comprasProyecciones/comprasProyecciones';
import { comprasEstrategias } from './comprasEstrategias/comprasEstrategias';


import chartJs from 'chart.js';


@Component({
  selector: 'compras-lists',
  templateUrl: 'compras.html'
})
export class compraspage{

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
      labels: [this.p_items["Nombre"][0], this.p_items["Nombre"][1], "Otros"],
      datasets: [
        {
          data: [this.p_items["Datas"][0], this.p_items["Datas"][0], this.getOtros(this.p_items["Datas"], 2)],
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
   this.navCtrl.push(comprasPeriodo);
  }

  abrirVentasProyecciones(){
   this.navCtrl.push(comprasProyecciones);
  }

   abrirVentasEstrategias(){
   this.navCtrl.push(comprasEstrategias);
  }


  getDoughnutChart() {
    const data = {
      labels: [this.prov_items["Nombre"][0], this.prov_items["Nombre"][1], "Otros"],
      datasets: [
      {
        data: [this.prov_items["Datas"][0], this.prov_items["Datas"][1], this.getOtros(this.prov_items["Datas"], 2)],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getProducts();
      this.getProviders();
    });
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
          document.getElementById("porc").textContent = "El producto mas comprado es " + this.p_items["Nombre"][0] + ", con " + Math.round(this.p_items["Datas"][0]*100) + " %";
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
          document.getElementById("porcprov").textContent = "El proveedor mas comprado es " + this.prov_items["Nombre"][0] + ", con " +Math.round(this.prov_items["Datas"][0]*100) + " %";
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
