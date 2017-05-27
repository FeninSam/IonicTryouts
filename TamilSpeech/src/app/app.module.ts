import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { HttpModule } from '@angular/http';
import {TextToSpeech} from '@ionic-native/text-to-speech'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TranslateServiceProvider } from '../providers/translate-service/translate-service';
import { SpeechServiceProvider } from '../providers/speech-service/speech-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechRecognition,
    TranslateServiceProvider,
    SpeechServiceProvider,
    TextToSpeech
  ]
})
export class AppModule {}
