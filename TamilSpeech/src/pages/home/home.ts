import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private translate: TranslateServiceProvider, private ssp: SpeechServiceProvider) {

  }
  pro: any;
  value: any;
  translatedValue: any;
  isSpeechSupported() {
    this.speechRecognition.requestPermission().then(() => {
      this.speechRecognition.getSupportedLanguages().then((resp) => {
        this.value = resp;
      });

    })

  }

  //Speech Recognition Section
  speak() {
    let options = {
      language: "hi-IN",
      matches: 1
    }

    this.speechRecognition.startListening(options)
      .subscribe(
      (matches: Array<string>) => {
        this.value = matches[0];
        console.log(matches[0]);
        this.translate.load(this.value).then((subdata) => {
          this.translatedValue = subdata;
          this.txtToSpeech(this.translatedValue);
        })
      },
      (onerror) => this.value = onerror
      )
  }

  //Text to Speech Section
  txtToSpeech(text: string) {
    this.ssp.convertToSpeech(text)
  }
}
