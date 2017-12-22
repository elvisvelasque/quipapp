import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { ventaspage } from '../ventas/ventas';
import { costospage } from '../costos/costos';
import { proveedorespage } from '../proveedores/proveedores';
//import { inventariopage } from '../inventario/inventario';
import { compraspage } from '../compras/compras';
import { ratiospage } from '../ratios/ratios';
import { resumenpage } from '../resumen/resumen';
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { estrategias } from '../estrategias/estrategias';
import { clientespage } from '../clientes/clientes';
import { NativeGoogleMapsPage } from '../geolocalizacion/geolocalizacion';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { marketing } from '../marketing/marketing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public headerName: string = "Invitado";
  public IsLogged: boolean = true;

  i_items: Array<any> = [];
  public backgroundImage = 'assets/img/background.png';

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public invoice: InvoiceProvider,
    private camera: Camera) {
  }
  
  abrirventas() {
    this.navCtrl.push(ventaspage);
  }

  abrircompras() {
    this.navCtrl.push(compraspage);
  }

  abrircostos() {
    this.navCtrl.push(costospage);
  }

  abrirratios() {
    this.navCtrl.push(ratiospage);
  }

  abrirresumen() {
    this.navCtrl.push(resumenpage);
  }

  abrirproveedores() {
    this.navCtrl.push(proveedorespage); 
  }

 abrirestrategias() {
    this.navCtrl.push(estrategias); 
  }

  abrirclientes() {
    this.navCtrl.push(clientespage);
  }
  abrirgeo() {
    this.navCtrl.push(NativeGoogleMapsPage);
  }

  abrirmarketing() {
    this.navCtrl.push(marketing);
  }

ionViewDidLoad() {
    this.platform.ready().then(() => {
        this.headerName = this.invoice.name;
    });
  }

  loadCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
