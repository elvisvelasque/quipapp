import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'
import { InvoiceProvider } from '../../providers/InvoiceProvider';

import chartJs from 'chart.js';

@Component({
  selector: 'clientes-lists',
  templateUrl: 'clientes.html'
})
export class clientespage{

	  @ViewChild('pieCanvas') pieCanvas;
	cl_items: Array<any> = [];
	clp_items: Array<any> = [];
  pieChart: any;
	loaded= false;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public invoice: InvoiceProvider)
  {
  }

ngAfterViewInit() {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getClients();
    });
  }

  getClients() {
    this.cl_items = [];
    this.invoice.GetClients().then(
      data => {
        if (data.length > 0) {
          this.cl_items = data;
          console.log("CLIENTES");
          console.log(this.cl_items);
          this.loaded = true;
          this.getClientsPie();
        } else {
          document.getElementById("msg").textContent = 'Lo sentimos, no hay información disponible sobre tus clientes';
        }
      },
      error => {
        console.error('Error al obtener data de clientes');
        console.dir(error);
      }
    );
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
      labels: [this.clp_items["Nombre"][0], this.clp_items["Nombre"][1], this.clp_items["Nombre"][2], this.clp_items["Nombre"][3], this.clp_items["Nombre"][4], "Otros"],
      datasets: [
        {
          data: [this.clp_items["Datas"][0], this.clp_items["Datas"][1], this.clp_items["Datas"][2], this.clp_items["Datas"][3], this.clp_items["Datas"][4], this.getOtros(this.clp_items["Datas"], 4)],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };
   	return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
	}

  getClientsPie() {
    this.clp_items = [];
    this.invoice.GetClientsPie().then(
      data => {
        if (data) {
          this.clp_items = data;
          console.log("CLIENTES");
          console.log(this.clp_items);
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

  getOtros(list: any[], num: number) {
    let suma: number = 0;
    for (var i = 0; i < list.length; i++) {
      if (i >= num) {
        suma = suma + list[i];
      }
    }
    return suma;
  }


}
