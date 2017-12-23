import { Component, ViewChild } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { InvoiceProvider } from '../../../providers/InvoiceProvider';
import chartJs from 'chart.js';



@Component({
  selector: 'page-comprasEstrategias',
  templateUrl: 'comprasEstrategias.html'
})
export class comprasEstrategias {
  @ViewChild('barCanvas') barCanvas;

  v_items: Array<any> = [];
  lastData: Array<any> = [];
  lastNombres: Array<any> = [];
  message: string;
  
  barChart: any;

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public invoice: InvoiceProvider) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.barChart = this.getBarChart();
    }, 150);
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  /*
  *  By specifying different types inside each dataset
  *  it's possible to have multiple bar types mixed into one.
  */

getBarChart() {
    const data = {
      labels: this.v_items["nombres"],
      datasets: [{
        label: 'Monto de venta',
        data: this.v_items["data"],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getPurchaseStrategies();
    });
  }

  getPurchaseStrategies() {
    this.v_items = [];
    this.invoice.getSalesStrategies().then(
      data => {
        if (data) {
          this.v_items = data;
          console.log(this.v_items);
          this.message = this.v_items["mensaje"];

          this.barChart = this.getBarChart();
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
