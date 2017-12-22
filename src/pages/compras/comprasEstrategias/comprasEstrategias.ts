import { Component, ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import chartJs from 'chart.js';



@Component({
  selector: 'page-comprasEstrategias',
  templateUrl: 'comprasEstrategias.html'
})
export class comprasEstrategias {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController) { }

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
      labels: ['Octubre', 'Noviembre'],
      datasets: [{
        label: 'Monto de compra',
        data: [19, 12],
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

  
}
