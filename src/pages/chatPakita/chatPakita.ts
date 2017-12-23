import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { InvoiceProvider } from '../../providers/InvoiceProvider';

@Component({
  selector: 'chat-pakita-lists',
  templateUrl: 'chatPakita.html'
})
export class chatpakitapage{
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

  messages = [];

  context: any;

  @ViewChild(Content) content: Content;

  public messageForm: any;
  chatBox: any;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
  public invoice: InvoiceProvider) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';

  }
  new : string;
  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);
      this.new = ' ';
      console.log(message);
      this.invoice.GetRespuesta(message, this.context).then(
          data => {
            this.context = data["context"];
            const replyData =
              {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: data["output"]["text"][0]
              };
            this.messages.push(replyData);
            this.scrollToBottom();
            
          },
          error => {
            
          }
        );

      const messageData =
        {
          toId: this.toUser._id,
          _id: 6,
          date: new Date(),
          userId: this.user._id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }


}