import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';



import chartJs from 'chart.js';


@Component({
  selector: 'cargar-lists',
  templateUrl: 'cargar.html'
})
export class cargarpage{


  public backgroundImage = 'assets/img/nube3.png';

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,

    )
  {
  }

  ngAfterViewInit() { }

  uploadresume()
  {
      this.fileChooser.open()
      .then(uri => 
      {
        console.log(uri)
        const fileTransfer: FileTransferObject = this.transfer.create();


    // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
      let options1: FileUploadOptions = {
         fileKey: 'image_upload_file',
         fileName: 'name.pdf',
         headers: {},
         params: {"app_key":"Testappkey"},
         chunkedMode : false
      
      }

      fileTransfer.upload(uri, 'your API that can take the required type of file that you want to upload.', options1)
       .then((data) => {
       // success
       alert("success"+JSON.stringify(data));
       }, (err) => {
       // error
       alert("error"+JSON.stringify(err));
           });

      })
      .catch(e => console.log(e));
  }

}
