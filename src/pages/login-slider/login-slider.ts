// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides} from 'ionic-angular';
import { InvoiceProvider } from '../../providers/InvoiceProvider';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login-slider',
  templateUrl: 'login-slider.html',
})
export class LoginSliderPage {

  public loginForm: any;
  public backgroundImage = 'assets/img/background-6.png';

  public email;
  public password;
  public username;
  public ruc;
  public password_confirmation;
  public name;

  public ruc_log;
  public pass_log;

  type: string;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public invoice: InvoiceProvider
  ) { 
    this.type = "login";
  }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.type="register"
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  back3(){
    this.type="login";
  }


  login() {
    console.log(this.ruc_log);
    console.log(this.pass_log);
    if (this.ruc_log == undefined || this.pass_log == undefined) {
      this.presentLoading('Ocurrió un error. Inténtalo de nuevo :)');
    }
    else {
      this.invoice.LogIn(this.ruc_log, this.pass_log).then(
        data => {
          if (data) {
            console.log(data)
            if (data["codigo"] == 1) {
              this.presentLoading('Te identificaste con éxito!');
              this.invoice.name = data["mensaje"];
              this.invoice.token = data["token"];
              this.navCtrl.setRoot(HomePage);
            }
            else {
              this.presentLoading('Ocurrió un error. Inténtalo de nuevo :)');
            }
            
          } else {
            this.presentLoading('Ocurrió un error. Inténtalo de nuevo :)');
          }
        },
        error => {
          this.presentLoading('Ocurrió un error. Inténtalo de nuevo :)');
          console.dir(error);
        }
      );
    }
  }

  signup() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.username);
    console.log(this.ruc);
    console.log(this.password_confirmation);
    console.log(this.name);
    this.invoice.AddUser(this.email, this.password, this.username, this.ruc, this.password_confirmation, this.name).then(
      data => {
        if (data) {
          console.log(data)
          if (data["codigo"] == 1) {
            this.presentLoading('Gracias por registrarte!');
            this.navCtrl.setRoot(HomePage);
          }
          else {
            this.presentLoading('Ocurrió un error. Inténtalo de nuevo :)');
          }
          
        } else {
          console.error('Error retrieving weather data: Data object is empty');
        }
      },
      error => {
        console.error('Error retrieving weather data');
        console.dir(error);
      }
    );
  }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }
}
