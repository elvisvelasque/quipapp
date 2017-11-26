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

  private sunatEndpoint = 'https://sunatcodeblack.mybluemix.net/';
  ruc = { RucVendedor : 20480072872 };

  constructor(public http: Http) {
  }

  private getUrl(command: string) {
    return this.sunatEndpoint + command;
  }

  public GetAllInvoices(): Promise<any> {
    let url: string = this.getUrl("invoices");
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

  public GetProductSales(): Promise<any> {
    let url: string = this.getUrl("producto/mas/vendido");
    return this.http.post(url, this.ruc)
      .toPromise()
      .then(this.extractData);
  }

  public GetProvidersSales(): Promise<any> {
    let url: string = this.getUrl("clientes/mas/vendido");
    return this.http.post(url, this.ruc)
      .toPromise()
      .then(this.extractData); 
  }
  
  public GetPeriodSales(): Promise<any> {
    let url: string = this.getUrl("ventas");
    return this.http.post(url, this.ruc)
      .toPromise()
      .then(this.extractData); 
  }
  
}
