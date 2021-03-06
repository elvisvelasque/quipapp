import { Component, ViewChild } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { InvoiceProvider } from '../../../providers/InvoiceProvider';
import chartJs from 'chart.js';



@Component({
  selector: 'page-comprasProyecciones',
  templateUrl: 'comprasProyecciones.html'
})
export class comprasProyecciones {
  
  @ViewChild('lineCanvas') lineCanvas;

  meta: string = "";
  proj_items = [];
  lineChart: any;
  numero_proy: number = 0;

  constructor(public platform: Platform,
    public navCtrl: NavController,
    public invoice: InvoiceProvider) { }

  ngAfterViewInit() {
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

   getLineChart() {
    const data = {
      labels: this.proj_items["nombres"],
      datasets: [
        {
          label: 'Periodos',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.proj_items["data"],
          spanGaps: false,
        }
      ]
    };

    return this.getChart(this.lineCanvas.nativeElement, 'line', data);
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getPurchasesProjections(3);
      this.getRandomMeta();
    });
  }

  getPurchasesProjections(num: number) {
    this.proj_items = [];
    this.proj_items = [];
    this.invoice.getPurchasesProjections(num).then(
      data => {
        if (data) {
          this.proj_items = data;
          console.log("Projections");
          console.log(this.proj_items);
          this.lineChart = this.getLineChart();
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

  getRandomMeta() {
    this.invoice.GetGoal().then(
      data => {
        let code = "0";
        if (data != null)
          code = data.codigo;

        if (code == "1")
          this.meta = data.message;
      },
      error => {
        console.error('Error al registrar meta');
        console.dir(error);
      }
    );
  }
}
