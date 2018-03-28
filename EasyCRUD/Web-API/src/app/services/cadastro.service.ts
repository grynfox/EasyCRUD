import { HttpHelper } from './../utils/HttpHelper';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CadastroService extends HttpHelper {
  private _cadastraCategoria = "Cadastro/CadastraCategoria";
  private _cadastraProduto = "Cadastro/CadastraProduto";

  constructor( http: Http){
    super(http);
  }
  cadastraCategoria(nomeCatParam: string){
    let result = this.postaction(this._cadastraCategoria, { NomeCat: nomeCatParam}).map(
      result => {
          let pedido = <any>result;
          return pedido;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }
  cadastraProduto(NomeProd: string, IdCat: number){
    

  }

}
