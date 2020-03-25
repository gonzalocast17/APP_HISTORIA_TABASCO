import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegionesPageModule } from '../pages/regiones/regiones.module';
import { RegionesRiosPageModule } from '../pages/regiones-rios/regiones-rios.module';
import { RegionesCentroPageModule } from '../pages/regiones-centro/regiones-centro.module';
import { RegionesSierraPageModule } from '../pages/regiones-sierra/regiones-sierra.module';
import { CreditosPageModule } from '../pages/creditos/creditos.module';
import { MenuPageModule } from '../pages/menu/menu.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    RegionesPageModule,
    RegionesRiosPageModule,
    RegionesCentroPageModule,
    RegionesSierraPageModule,
    CreditosPageModule,
    MenuPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
