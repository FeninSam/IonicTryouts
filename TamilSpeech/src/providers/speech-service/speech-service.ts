import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {TextToSpeech} from '@ionic-native/text-to-speech'
import 'rxjs/add/operator/map';

/*
  Generated class for the SpeechServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpeechServiceProvider {
  constructor(public http: Http,private tts:TextToSpeech) {
    console.log('Hello SpeechServiceProvider Provider');
  }
convertToSpeech(text:string,toLang:string){
  console.log(text);

this.tts.speak({text:text,
locale:toLang})
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}
} 
