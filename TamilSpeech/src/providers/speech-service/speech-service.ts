import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {TextToSpeech,TTSOptions} from '@ionic-native/text-to-speech'
import 'rxjs/add/operator/map';

/*
  Generated class for the SpeechServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpeechServiceProvider {
options:TTSOptions
  constructor(public http: Http,private tts:TextToSpeech) {
    console.log('Hello SpeechServiceProvider Provider');
  }
convertToSpeech(text:string){
  console.log(text);
this.options={
text:text,
locale:"en-US",
rate:0.5
}
this.tts.speak(this.options)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}
}
