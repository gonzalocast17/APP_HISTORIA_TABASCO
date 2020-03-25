import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegionesPage } from '../regiones/regiones';
import { RegionesRiosPage } from '../regiones-rios/regiones-rios';
import { RegionesCentroPage } from '../regiones-centro/regiones-centro';
import { RegionesSierraPage } from '../regiones-sierra/regiones-sierra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public getRegionesChontalpa() {
    this.navCtrl.push(RegionesPage);
  }

  public getRegionesRios() {
    this.navCtrl.push(RegionesRiosPage);
  }

  public getRegioneSierra() {
    this.navCtrl.push(RegionesSierraPage);
  }

  public getRegionesCentro() {
    this.navCtrl.push(RegionesCentroPage)
  }

}
