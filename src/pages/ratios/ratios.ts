import { Component } from '@angular/core';
import { NavController, NavParams,ItemSliding, Item } from 'ionic-angular';

@Component({
  selector: 'ratios-lists',
  templateUrl: 'ratios.html'
})
export class ratiospage{

  type: string;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,) {

  	 this.type = "principal";
  }

  irAlternativas(){
    this.type="alternativas"
  }
//---------------------------------------------------------------------------------
activeItemSliding: ItemSliding = null;

  items = [
   
  ];

  things = [
    
  ];

    things2 = [
    {
      title: 'Enero',
    },
    {
      title: 'Febrero',
    },
    {
      title: 'Marzo',
    },
    {
      title: 'Abril',
    },
    {
      title: 'Mayo',
    },
    {
      title: 'Junio',
    },
    {
      title: 'Julio',
    },
    {
      title: 'Agosto',
    },
    {
      title: 'Setiembre',
    },
    {
      title: 'Octubre',
    },
    {
      title: 'Noviembre',
    },
    {
      title: 'Diciembre',
    },
  ];

  a:number = 0;
  año:number=2018; 


  addThing() {
    console.log('add thing');
    //this.things.push({ title: 'Pregunta ' + (this.things.length + 1) });
    if (this.a<=11){
    this.things.push({ title: this.things2[this.a].title+' '+String(this.año)});
    this.a=this.a+1
	}else{
	this.año=this.año+1;
	this.a=0
	this.things.push({ title: this.things2[this.a].title+' '+String(this.año)});
	}
  }

  addItem() {
    console.log('add item');
    this.items.push({ title: 'Meta ' + (this.items.length + 1) });
  }

  deleteItem(list, index) {
    list.splice(index,1);
  }

  openOption(itemSlide: ItemSliding, item: Item, event) {
    console.log('opening item slide..');
    event.stopPropagation(); // here if you want item to be tappable
    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
      this.closeOption();
    }

    this.activeItemSliding = itemSlide;
    const swipeAmount = 33; // set your required swipe amount

    console.log('swipe amount ', swipeAmount);
    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);

    itemSlide.setElementClass('active-slide', true);
    itemSlide.setElementClass('active-options-right', true);
    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
  }

  closeOption() {
    console.log('closing item slide..');

    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }

  back() {
    this.type = "principal";
  }
}
