import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InvoiceProvider } from '../../providers/InvoiceProvider';
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
  @ViewChild('pieCanvas2') pieCanvas2;
  @ViewChild('bubbleCanvas') bubbleCanvas;
  @ViewChild('mixedCanvas') mixedCanvas;

  barChart: any;
  doughnutChart: any;
  halfDoughnutChart: any;
  lineChart: any;
  radarChart: any;
  polarAreaChart: any;
  pieChart: any;
  pieChart2: any;
  bubbleChart: any;
  mixedChart: any;

  p_items: Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public invoice: InvoiceProvider) { 

  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  ngAfterViewInit() {
    
      console.log("after view init");
      this.pieChart = this.getPieChart();

      this.pieChart2 = this.getPieChart2();
    
  }

  getPieChart() {
    this.p_items = [];
        this.invoice.GetCompras().then(
          data => {
            if (data) {
              this.p_items = data;
              document.getElementById("porc").textContent = "El producto mas vendido es " + data["Nombre"][0];
              const data2 = {
                labels: [data["Nombre"][0], "Otros"],
                datasets: [
                {
                  data: [data["Datas"][0], this.getOtros(data["Datas"], 1)],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
              };
              return this.getChart(this.pieCanvas.nativeElement, 'pie', data2);
            } else {
              console.error('Error retrieving weather data: Data object is empty');
            }
          },
          error => {
            
          }
        );
  }
    getPieChart2() {
    this.p_items = [];
        this.invoice.GetCompras().then(
          data => {
            if (data) {
              this.p_items = data;
              const m = data["Nombre"].length;
              document.getElementById("porc2").textContent = "El producto menos vendido es " + data["Nombre"][m-1];
              const data2 = {
                labels: [data["Nombre"][m-1], "Otros"],
                datasets: [
                {
                  data: [0.1, 0.9],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
              };
              return this.getChart(this.pieCanvas2.nativeElement, 'pie', data2);
            } else {
              console.error('Error retrieving weather data: Data object is empty');
            }
          },
          error => {
            
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
  

viewg1() {
  this.type="1";
  document.getElementById("sw1").style.display = "block";
  document.getElementById("sw2").style.display = "none";
}

viewg2() {
  this.type="2";
  document.getElementById("sw1").style.display = "none";
  document.getElementById("sw2").style.display = "block";
}


}
