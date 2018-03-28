import { HttpHelper } from './../utils/HttpHelper';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { NgModel } from '@angular/forms';
          // tslint:disable:prefer-const
@Injectable()
export class CadastroService extends HttpHelper {
  private _cadastraCategoria = 'Categoria/CadastraCategoria';
  private _cadastraProduto = 'Produto/CadastraProduto';

  constructor( http: Http) {
    super(http);
  }
  cadastraCategoria(nomeCatParam: string) {
    let result = this.postaction(this._cadastraCategoria, { NomeCat: nomeCatParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let categoria = <any>result;
          return categoria;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }

  cadastraProduto(descProdParam: string, idCatParam: Number) {
    let result = this.postaction(this._cadastraProduto, { DescProd: descProdParam, IdCat: idCatParam}).map(
      // tslint:disable-next-line:no-shadowed-variable
      result => {

          let produto = <any>result;
          return produto;
      }
  ).catch(err => { return Observable.throw(err || 'Server error'); });
  return result;
  }


}
