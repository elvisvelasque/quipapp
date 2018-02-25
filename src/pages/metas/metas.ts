import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ToastController, Platform } from 'ionic-angular';
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { metasAdd } from './metas-add/metas-add';
import { LoadingController } from 'ionic-angular/components/loading/loading';

@Component({
  selector: 'metas-lists',
  templateUrl: 'metas.html'
})
export class metaspage{

  metas: Array<any> = [];
  metasReady: boolean = false;
  today: Date = new Date();
  loading: any;
  errorToast: any;

  constructor(
    public platform: Platform, 
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public invoice: InvoiceProvider
  ) { 
    this.loading = this.loadingCtrl.create({
      content: "Espere un momento",
      spinner: "crescent"
    }); 
    this.loading.onDidDismiss(() => { }
  );

    this.errorToast = this.toastCtrl.create({
      message: "Lo sentimos, no hay información disponible sobre tus metas",
      position: "top",
      duration: 2000,
    });
  }
  
  ionViewWilload() {
    this.platform.ready().then(() => {
      this.getAllMetas();
    });
  }

  getAllMetas() {
    this.loading.present();
    this.metas = [];
    this.invoice.GetAllGoals().then(
      data => {
        if (data.length > 0) {
          this.metasReady = true;
          this.metas = data;
          console.log("METAS");
          console.log(this.metas);
        } else {
          this.errorToast.present();
        }
        this.loading.dismiss();
      },
      error => {
        console.error('Error al obtener data de metas');
        console.dir(error);
        this.loading.dismiss();
      }
    );
  }

  addMeta() {
    let metasAddModal = this.modalCtrl.create(metasAdd, { userId: 8675309 });
    metasAddModal.present();
    metasAddModal.onWillDismiss(data => {this.getAllMetas()});
  }

  removeModal(id: string) {
    let confirmAlert = this.alertCtrl.create({
      title: "Eliminar Meta",
      message: "¿Está seguro de eliminar esta meta?",
      buttons: [
        { text: 'Cancelar', role: 'cancel', handler: () => { } },
        { text: 'Confirmar', handler: () => {
          let toast = this.toastCtrl.create({
            duration: 1000,
            position: 'top',
          });
          
          this.invoice.DeleteGoal(id).then(
            data => {
              let code = "0";
              if (data != null)
                code = data.codigo;

              if (code == "1")
                toast.setMessage("La meta se eliminó con éxito");
              else
                toast.setMessage("Ocurrió un error, inténtalo de nuevo");

              toast.present();
              this.getAllMetas();
            },
            error => {
              console.error('Error al eliminar meta');
              console.dir(error);
            }
          );
        }},
      ]
    });
    confirmAlert.present();
  }
}