import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, Platform } from 'ionic-angular';
import { InvoiceProvider } from '../../../providers/InvoiceProvider';

@Component({
  selector: 'metas-add',
  templateUrl: 'metas-add.html'
})
export class metasAdd {

  goalMessage: string = "";
  metasReady: boolean = false;
  goalDate: string;
  minDate: string;
  maxDate: string;
  datesLoaded: boolean = false;

  constructor(
    public platform: Platform, 
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public invoice: InvoiceProvider
  ) { 
    let today = new Date();
    this.goalDate = today.toISOString();
    this.minDate = today.toISOString();
    this.maxDate = (new Date(today.getFullYear() + 5, today.getMonth(), today.getDate())).toISOString();
  }
  
  addGoal() {
    if (this.goalMessage.length == 0) {
      let alert = this.alertCtrl.create({
        title: "Añadir Meta",
        message: "El mensaje no puede ser vacío",
        buttons: [{ text: 'Ok', handler: () => { } }]
      });
      alert.present();
    }
    else {
      let formattedDate = new Date(this.goalDate);
      let date: string = ("0" + formattedDate.getDate()).slice(-2) + "/" + ("0" + formattedDate.getMonth()).slice(-2) + "/" + formattedDate.getFullYear();

      let alert = this.alertCtrl.create({
        title: "Nueva Meta",
        buttons: [{ text: 'Ok', handler: () => {
          let navTransition = alert.dismiss();
          navTransition.then(() => {
            this.dismiss();
          });
            return false;
          }
        }]
      });

      this.invoice.AddGoal(this.goalMessage, date).then(
        data => {
          let code = "0";
          if (data != null)
            code = data.codigo;

          if (code == "1")
            alert.setMessage("La meta se registró con éxito");
          else
            alert.setMessage("Ocurrió un error, inténtalo de nuevo");

          alert.present();
        },
        error => {
          console.error('Error al registrar meta');
          console.dir(error);
        }
      );
    }

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}