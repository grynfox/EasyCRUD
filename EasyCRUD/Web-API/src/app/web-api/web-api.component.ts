import { CadastroService } from './../services/cadastro.service';
import { Component, OnInit } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.css']
})
export class WebApiComponent implements OnInit {
// tslint:disable-next-line:no-inferrable-types
aba: string = 'home';
NomeCat: string;
DescProd: string;
IdCat: number;
  constructor(private service: CadastroService) {
   }
   cadastrarCategoria() {
     this.service.cadastraCategoria(this.NomeCat).subscribe(retorno => alert(retorno));
   }
   cadastrarProduto() {
    this.service.cadastraProduto(this.DescProd, this.IdCat);

   }

  ngOnInit() {
  }

}
