import { HttpHelper } from './../utils/HttpHelper';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CadastroService extends HttpHelper {
  private _cadastraCategoria = "Cadastro/CadastraCategoria";

  constructor( http: Http){
    super(http);
  }
  cadastraCategoria(nomeCat: string){
    let result = this.postaction(this._cadastraCategoria, { nomeCategoria: nomeCat}).map(
      result => {
          let pedido = <any>result;
          return pedido;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  cadastraProduto(IdProd:number, NomeProd:string){
      

  }

}
