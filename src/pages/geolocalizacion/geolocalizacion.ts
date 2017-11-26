import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-native-google-maps',
  templateUrl: 'geolocalizacion.html',
})
export class NativeGoogleMapsPage {

  public backgroundImage = 'assets/img/maps.jpg';


  
  constructor(
    public navCtrl: NavController,) {
  }

  // Load map only after view is initialized
}
