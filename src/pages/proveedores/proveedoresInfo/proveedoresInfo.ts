import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'
import { InvoiceProvider } from '../../../providers/InvoiceProvider';

@Component({
  selector: 'proveedoresInfo-lists',
  templateUrl: 'proveedoresInfo.html'
})
export class proveedoresInfo{

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

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      //this.getProducts();
    });
  }
}
