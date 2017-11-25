import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Ionic_2_Provider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvoiceProvider {

  private sunatEndpoint = 'https://sunatcodeblack.mybluemix.net/invoices';

  constructor(public http: Http) {
  }

  public GetAllInvoices(): Promise<any> {
    let url: string = this.sunatEndpoint;
    return this.http.get(url)
      .toPromise()
      .then(this.extractData);
  }

  private extractData(res: Response) {
    //Convert the response to JSON format
    let body = res.json();
    //Return the data (or nothing)
    return body || {};
  }
}
