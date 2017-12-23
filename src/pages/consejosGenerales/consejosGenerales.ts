import { FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvoiceProvider } from '../../providers/InvoiceProvider';

@Component({
  selector: 'consejos-generales-lists',
  templateUrl: 'consejosGenerales.html'
})
export class consejosgeneralespage{
toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'assets/img/curioso.gif',
    username: 'Pakita',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'assets/img/ian-avatar.png',
    username: 'Usuario',
  };

  doneLoading = false;

  messages = [
  ];

  public messageForm: any;
  chatBox: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public invoice: InvoiceProvider) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';
  }


}
