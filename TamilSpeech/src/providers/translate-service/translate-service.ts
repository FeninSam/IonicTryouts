import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TranslateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TranslateServiceProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello TranslateServiceProvider Provider');
  }
  load(reqString: string, toLang:string ) {
    
    let options: RequestOptions;
    let headers: Headers = new Headers();
    headers.set('Accept', 'application/json');
    //headers.append('content-type', 'application/json; charset=utf-8');
    let params: URLSearchParams = new URLSearchParams();
    params.set('text', reqString);
    params.set('to', "fr-FR");
    params.set('from', "hi-IN");
    options = new RequestOptions({
      headers: headers
      //params:params,
    })
    // let body = JSON.stringify({
    // 	text: reqString,
    // 	from: "hi-IN",
    //   to:"en-IN"
    // });


    //https://translate.googleapis.com/translate_a/single?client=gtx&sl="  + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText)
    return new Promise(resolve => {
     // this.http.get("http://www.transltr.org/api/translate?text=" + reqString + "&from=hi-IN&to="+toLang, options)
     this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=hi-IN&tl=" + toLang + "&dt=t&q=" + encodeURI(reqString), options)
        .map(res => res.json())
        .subscribe(subdata => {
          this.data = subdata[0][0][0];
          resolve(subdata[0][0][0])
          //resolve(subdata.translationText);
        });
    });
  }
}
