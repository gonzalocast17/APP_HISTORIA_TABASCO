import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegionesPage } from './regiones';

@NgModule({
  declarations: [
    RegionesPage,
  ],
  imports: [
    IonicPageModule.forChild(RegionesPage),
  ],
})
export class RegionesPageModule {}
