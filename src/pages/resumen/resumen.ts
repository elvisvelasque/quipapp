import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams,Platform, ActionSheetController,LoadingController} from 'ionic-angular';
import { CameraProvider } from '../../providers/camera.provider';


@Component({
  selector: 'resumen-lists',
  templateUrl: 'resumen.html'
})
export class resumenpage{
placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController
  ) {

  }

  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

/*myForm: FormGroup;
  private myData: any;

constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      private builder: FormBuilder, 
      private userProfileService: UserProfileService,
      private progressDialog: ProgressDialog) {

this.myForm = builder.group({
 'upresume_one': ['', Validators.required]
})

}

save(formData) {
console.log('Form data is ', formData);
}
 
*/

}
