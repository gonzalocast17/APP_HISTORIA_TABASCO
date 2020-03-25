import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreditosPage } from '../creditos/creditos';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the RegionesRiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regiones-rios',
  templateUrl: 'regiones-rios.html',
})
export class RegionesRiosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionesRiosPage');
  }

  getPageCreditos():void{
    this.navCtrl.push(CreditosPage);
  }

  irMenu():void{
    this.navCtrl.push(MenuPage)
  }


}
