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
      labels: [this.prov_items["Nombre"][0], this.prov_items["Nombre"][1], this.prov_items["Nombre"][2], this.prov_items["Nombre"][3], this.prov_items["Nombre"][4], "Otros"],
      datasets: [
        {
          data: [this.prov_items["Datas"][0], this.prov_items["Datas"][1], this.prov_items["Datas"][2], this.prov_items["Datas"][3], this.prov_items["Datas"][4], this.getOtros(this.prov_items["Datas"], 4)],
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
      this.getProvidersPie();
    });
  }

  abrirProveedoresInfo(){
   this.navCtrl.push(proveedoresInfo);
  }

  getProvidersPie() {
    this.prov_items = [];
    this.invoice.GetProvidersPie().then(
      data => {
        if (data) {
          this.prov_items = data;
          console.log("PROVEEDORES");
          console.log(this.prov_items);
          this.pieChart= this.getPieChart();
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
