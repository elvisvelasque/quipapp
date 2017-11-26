import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';

@Component({
  selector: 'inevtario-lists',
  templateUrl: 'inventario.html'
})
export class inventariopage{
 type: string;
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('halfDoughnutCanvas') halfDoughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('radarCanvas') radarCanvas;
  @ViewChild('polarCanvas') polarCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('bubbleCanvas') bubbleCanvas;
  @ViewChild('mixedCanvas') mixedCanvas;

  barChart: any;
  doughnutChart: any;
  halfDoughnutChart: any;
  lineChart: any;
  radarChart: any;
  polarAreaChart: any;
  pieChart: any;
  bubbleChart: any;
  mixedChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,) { }

  ngAfterViewInit() {
    setTimeout(() => {
     
    }, 150);
    setTimeout(() => {
      
    }, 250);
    setTimeout(() => {
     

    }, 350);

  }

  updateData() {
    // After instantiating your chart, its data is accessible and
    // can be changed anytime with the function update().
    // It takes care of everything and even redraws the animations :D
    this.pieChart.data.datasets[0].data = [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000];
    this.pieChart.update();
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
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);

  }

viewg1() {
  this.type="1";
        this.pieChart = this.getPieChart();
}

viewg2() {
  this.type="2";
}

viewg3() {
  this.type="3";
}


}
