import { Component,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TranslateServiceProvider } from '../../providers/translate-service/translate-service';
import { SpeechServiceProvider } from '../../providers/speech-service/speech-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TranslateServiceProvider, SpeechServiceProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private translate: TranslateServiceProvider, private ssp: SpeechServiceProvider, private zone:NgZone) {

  }
  pro: any;
  userVoiceText: any;
  selectedRange:number=100;
  toLang:string="en-US";
  translatedValue: any;
  isSpeechSupported() {
    this.speechRecognition.requestPermission().then(() => {
      this.speechRecognition.getSupportedLanguages().then((resp) => {
        this.userVoiceText = resp;
      });

    })

  }

  //Speech Recognition Section
  speak() {
    let options = {
      language: "hi-IN",
      matches: 1
    }
let langSelector=Math.floor(this.selectedRange/100);
 switch(langSelector){
   case 1:
this.toLang="en-US";
break;
   case 2:
   this.toLang="fr-FR";
break;
   case 3:
   this.toLang="es-ES";
break;
case 4:
 this.toLang="es-ES";
break;
 }

    this.speechRecognition.startListening(options)
      .subscribe(
      (matches: Array<string>) => {
        this.userVoiceText = matches[0];
        console.log(matches[0]);
        console.log(this.toLang+ this.selectedRange)
        this.translate.load(this.userVoiceText,this.toLang).then((subdata) => {
          this.zone.run(()=>{
          this.translatedValue = subdata;
          this.txtToSpeech(this.translatedValue);
          });
        })
      },
      (onerror) => this.userVoiceText = onerror
      )

  }

  //Text to Speech Section
  txtToSpeech(text: string) {
    this.ssp.convertToSpeech(text,this.toLang)
  }
}
