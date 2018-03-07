import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, ToastController, AlertController  } from 'ionic-angular'
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';



import chartJs from 'chart.js';


@Component({
  selector: 'cargar-lists',
  templateUrl: 'cargar.html'
})
export class cargarpage{


  public backgroundImage = 'assets/img/nube3.png';
  imageFileName:any;
  imageURI:any;
  chooseAlert: any;
  loadAlert: any;
  fileTransfer: any;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController

    )
  {
  	this.fileTransfer = this.transfer.create();

  	this.loadAlert = this.alertCtrl.create({
      title: "Load",
      message: "",
      buttons: [{ text: 'Ok', handler: () => { } }]
    });

    this.chooseAlert = this.alertCtrl.create({
      title: "Choose",
      message: "",
      buttons: [{ text: 'Ok', handler: () => {
          let loader = this.loadingCtrl.create({
            content: "Uploading..."
          });
          loader.present();
          const fileTransfer: FileTransferObject = this.transfer.create();
      
          let options: FileUploadOptions = {
            fileKey: 'media',
            fileName: 'Facturas.zip',
            chunkedMode: false,
            //mimeType: "multipart/form-data",
            mimeType: "application/zip",
            httpMethod: "POST",
            params: {
              'RucVendedor': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydWMiOiIxMDA5NDkwNjQ2MSIsImlhdCI6MTUxNDA0NzIwMX0.W-gz2F13FzyvaI-XcykHo8kONBttlYGIhJKAZddmnX8'
            }
          }
      
          fileTransfer.upload(this.imageURI, 'http://localhost:3000/subir/invoice', options)
            .then((data) => {
              this.loadAlert.setMessage("Bien");
              this.loadAlert.present();
            loader.dismiss();
          }, (err) => {
            this.loadAlert.setMessage(JSON.stringify(err));
            this.loadAlert.present();
            loader.dismiss();
          });
      } }]
    });
  }

  ngAfterViewInit() { }

  uploadFile() {

    this.fileChooser.open()
        .then(uri => 
        {
          console.log(uri)         
          this.imageURI = uri;
          this.chooseAlert.setMessage(uri);
          this.chooseAlert.present();
        });
  }

}
