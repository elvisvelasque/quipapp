import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { proveedoresInfo } from './proveedoresInfo/proveedoresInfo';
import chartJs from 'chart.js';

@Component({
  selector: 'proveedores-lists',
  templateUrl: 'proveedores.html'
})
export class proveedorespage{

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
      labels: ["Proveedor 1", "Proveedor 2", "Proveedor 3"],
      datasets: [
        {
          data: [1000, 2000, 3000],
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

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getProducts();
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

  abrirProveedoresInfo(){
   this.navCtrl.push(proveedoresInfo);
  }

  getProducts() {
    this.pieChart = this.getPieChart();
    /*
    this.p_items = [];
    this.invoice.GetProductSales().then(
      data => {
        if (data) {
          this.p_items = data;
          console.log("PRODUCTOS");
          console.log(this.p_items);
          this.pieChart = this.getPieChart();
          document.getElementById("porc").textContent = Math.round(this.p_items["Datas"][0]) + " %";
        } else {
          console.error('Error retrieving weather data: Data object is empty');
        }
      },
      error => {
        //Hide the loading indicator
        console.error('Error retrieving weather data');
        console.dir(error);
      }
    );*/
  }
}
