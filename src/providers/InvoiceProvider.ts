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

  public name = "";
  private sunatEndpoint = 'https://sunatcodeblack.mybluemix.net/';
  public token: number = 0;

  constructor(public http: Http) {
  }

  private getUrl(command: string) {
    return this.sunatEndpoint + command;
  }

  private extractData(res: Response) {
    //Convert the response to JSON format
    let body = res.json();
    //Return the data (or nothing)
    return body || {};
  }

  // Invices

  public GetAllInvoices(): Promise<any> {
    let url: string = this.getUrl("invoices");
    return this.http.get(url)
      .toPromise()
      .then(this.extractData);
  }

  // Watson

  public GetRespuesta(pregunta: string, contexto: any): Promise<any> {
    let content = {mensaje: "", context: {}};
    content.mensaje = pregunta;
    content.context = contexto;
    console.log(JSON.stringify(content));
    let url: string = this.getUrl("watson");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);
  }

  //Ventas
  
  public GetProductSales(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("producto/mas/vendido");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);
  }

  public GetClientsSales(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("clientes/mas/vendido");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }
  
  public GetPeriodSales(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("ventas");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  public getSalesProjections(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("ventas/proyectadas");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);  
  }

  public getSalesStrategies(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("ventas/estrategias");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);  
  }
 
  //Compras

  public GetProductPurchases(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("producto/mas/comprado");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);
  }

  public GetProvidersPurchases(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("proveedor/mas/comprado");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  public GetPeriodPurchases(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("compras");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  public getPurchasesProjections(num:number): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("compras/proyectadas");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);  
  }
  
  public getPurchasesStrategies(): Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("compras/estrategias");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData);  
  }

  //Clientes

  public GetClients():  Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("clientes/caracteristicas");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  public GetClientsPie():  Promise<any> {
      let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("clientes/mas/cantidad");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  //Proveedores

  public GetProviders():  Promise<any> {
    let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("proveedores/caracteristicas");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

    public GetProvidersPie():  Promise<any> {
      let content = {RucVendedor: 0};
    content.RucVendedor = this.token;
    let url: string = this.getUrl("proveedores/mas/vendido");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  // Registro
  
  public AddUser(email: string, password: string, username: string, ruc: string, password_confirmation: string, name: string): Promise<any> {
    let content = { email: "", password: "", username: "", ruc: "", password_confirmation: "", name: ""};
    content.email = email;
    content.password = password;
    content.username = username;
    content.ruc = ruc;
    content.password_confirmation = password_confirmation;
    content.name = name;
    let url: string = this.getUrl("users");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }

  // Ingreso

  public LogIn(ruc: string, password: string): Promise<any> {
    let content = { ruc: "", password: ""};
    content.password = password;
    content.ruc = ruc;
    let url: string = this.getUrl("session");
    return this.http.post(url, content)
      .toPromise()
      .then(this.extractData); 
  }
}
