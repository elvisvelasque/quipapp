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

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log("after view init");
      this.pieChart = this.getPieChart();
    }, 1000);
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
  document.getElementById("sw1").style.display = "block";
  document.getElementById("sw2").style.display = "none";
  document.getElementById("sw3").style.display = "none";
}

viewg2() {
  this.type="2";
  document.getElementById("sw1").style.display = "none";
  document.getElementById("sw2").style.display = "block";
  document.getElementById("sw3").style.display = "none";
}

viewg3() {
  this.type="3";
  document.getElementById("sw1").style.display = "none";
  document.getElementById("sw2").style.display = "none";
  document.getElementById("sw3").style.display = "block";
}


}
