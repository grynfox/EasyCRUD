webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-web-api></app-web-api>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__ = __webpack_require__("./src/app/services/cadastro.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_api_web_api_component__ = __webpack_require__("./src/app/web-api/web-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__web_api_web_api_component__["a" /* WebApiComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* CollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                // NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientXsrfModule */].withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN'
                }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__["a" /* CadastroService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/cadastro.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HttpHelper__ = __webpack_require__("./src/app/utils/HttpHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// tslint:disable:prefer-const
var CadastroService = /** @class */ (function (_super) {
    __extends(CadastroService, _super);
    function CadastroService(http) {
        var _this = _super.call(this, http) || this;
        _this._cadastraCategoria = 'Categoria/CadastraCategoria';
        _this._cadastraProduto = 'Produto/CadastraProduto';
        _this._buscaCategoria = 'Categoria/GetCategoria';
        _this._buscaProdutos = 'Produto/GetProdutos';
        _this._delCat = 'Categoria/apagaCat';
        _this._altCat = 'Categoria/AlteraCat';
        return _this;
    }
    CadastroService.prototype.cadastraCategoria = function (nomeCatParam) {
        var result = this.postaction(this._cadastraCategoria, { NomeCat: nomeCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var categoria = result;
            return categoria;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.cadastraProduto = function (nomeProdParam, idCatParam) {
        var result = this.postaction(this._cadastraProduto, { NomeProd: nomeProdParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.alteraCat = function (idCatParam, nomeCatParam) {
        var result = this.putaction(this._altCat, { IdCat: idCatParam, NomeCat: nomeCatParam, }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.buscaCategoria = function (idCatParam, nomeCatParam) {
        var result = this.getaction(this._buscaCategoria, { NomeCat: nomeCatParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.buscaProduto = function (idProdParam, nomeProdParam, idCatParam, nomeCatParam) {
        var result = this.getaction(this._buscaProdutos, { IdProd: idProdParam, NomeProd: nomeProdParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService.prototype.apagaCat = function (idCatParam) {
        var result = this.deleteaction(this._delCat, { IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var busca = result;
            return busca;
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err || 'Server error'); });
        return result;
    };
    CadastroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CadastroService);
    return CadastroService;
}(__WEBPACK_IMPORTED_MODULE_0__utils_HttpHelper__["a" /* HttpHelper */]));



/***/ }),

/***/ "./src/app/utils/HttpHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");



var HttpHelper = /** @class */ (function () {
    function HttpHelper(_http) {
        this._http = _http;
        this._base = "API/";
    }
    Object.defineProperty(HttpHelper.prototype, "haserror", {
        get: function () {
            return this.errormsg != null;
        },
        enumerable: true,
        configurable: true
    });
    HttpHelper.prototype.obj_to_query = function (obj) {
        var parts = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return parts ? "?" + parts.join('&') : "";
    };
    HttpHelper.prototype.getaction = function (path, body) {
        if (body === void 0) { body = null; }
        return this._http.get(this._base + path + this.obj_to_query(body))
            .map(function (res) {
            return res.json();
        })
            .catch(this._handleError);
    };
    HttpHelper.prototype.deleteaction = function (path, body) {
        if (body === void 0) { body = null; }
        return this._http.delete(this._base + path + this.obj_to_query(body))
            .map(function (res) {
            return res.json();
        })
            .catch(this._handleError);
    };
    HttpHelper.prototype.postaction = function (path, param) {
        if (param === void 0) { param = null; }
        this.errormsg = null;
        var body = JSON.stringify(param);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    };
    HttpHelper.prototype.putaction = function (path, param) {
        if (param === void 0) { param = null; }
        this.errormsg = null;
        var body = JSON.stringify(param);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    };
    HttpHelper.prototype._handleError = function (error) {
        if (error.status == 401) {
            localStorage.removeItem('currentUser');
            location.reload();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
    };
    HttpHelper.prototype._handleSuccess = function (success) {
        var jsonresult = null;
        try {
            jsonresult = success.json();
        }
        catch (ex) {
            return success;
        }
        return jsonresult;
    };
    return HttpHelper;
}());



/***/ }),

/***/ "./src/app/web-api/web-api.component.css":
/***/ (function(module, exports) {

module.exports = ".menu-fixed{\r\n  top: 20px\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body class=\"fixed-nav sticky-footer bg-dark\" id=\"page-top\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" id=\"mainNav\">\n      <a class=\"navbar-brand text-white bg-dark\" (click)=\"aba= 'home'\">Easy CRUD</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggngler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n\n          <div class=\"dropdown\">\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Product\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\"  (click)=\"aba= 'cadastroProd'\">Cadastro de Produto</a>\n                <a class=\"dropdown-item\" (click)=\"aba= 'altProd'\" >Alterar Produto</a>\n                <a class=\"dropdown-item\" (click)=\"aba= 'delProd'\">Excluir Produto</a>\n              </div>\n            </div>\n          <div class=\"dropdown\">\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Category\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\"  (click)=\"aba= 'cadastroCat'\">Cadastro de Categoria</a>\n                <a class=\"dropdown-item\" (click)=\"aba= 'altCat'\">Alterar Categoria</a>\n                <a class=\"dropdown-item\" (click)=\"aba= 'delCat'\">Exclusão de Categoria</a>\n              </div>\n            </div>\n            <div class=\"dropdown\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Reports\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item\"  (click)=\"aba= 'reportProd'\">Produtos Cadastrados</a>\n                  <a class=\"dropdown-item\" (click)=\"aba= 'reports'\">Produtos por Categoria</a>\n                  <a class=\"dropdown-item\" (click)=\"aba= 'reportCat'\">Categorias Cadastradas</a>\n                </div>\n              </div>\n        </ul>\n      </div>\n    </nav>\n\n</body>\n\n\n\n\n<form [ngSwitch]=\"aba\" >\n      <!--Produtos-->\n    <div class=\"container\" *ngSwitchCase=\"'cadastroProd'\">\n        <div class=\"card card-register mx-auto mt-5\">\n          <div class=\"card-header text-center\">Cadastra Produto</div>\n          <div class=\"card-body\">\n            <form>\n              <div class=\"form-group\">\n                <div class=\"form-row\">\n                  <div class=\"col-md-12\">\n                    <label for=\"NomeProd\">Produto</label>\n                    <input class=\"form-control\" id=\"NomeProd\" name=\"NomeProd\" type=\"text\" placeholder=\"Digite o nome do produto\"[(ngModel)]=\"NomeProd\" required>\n                  </div>\n                </div>\n              </div>\n              <label for=\"categorias\">Selecione a categoria</label>\n              <div class=\"form-group col align-self-center\">\n                  <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\n                      <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\n                  </select>\n              </div>\n              <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarProduto(NomeProd, IdCat);\">Cadastrar Produto</a>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\" *ngSwitchCase=\"'altProd'\">\n          <div class=\"card card-register mx-auto mt-5\">\n            <div class=\"card-header text-center\">Alterar Produto</div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"form-group\">\n                  <div class=\"form-row\">\n                    <div class=\"col-md-12\">\n                      <label for=\"NomeProd\">Produto</label>\n                      <input class=\"form-control\" id=\"NomeProd\" name=\"NomeProd\" type=\"text\" placeholder=\"Digite o novo nome do produto\" [(ngModel)]=\"NomeProd\" required>\n                    </div>\n                  </div>\n                </div>\n                <label for=\"categorias\">Selecione o Produto que será alterado</label>\n                <div class=\"form-group\">\n                    <select [(ngModel)]=\"NomeProd\" class=\"custom-select\"  name=\"produtos\">\n                        <option *ngFor=\"let buscaProd of produtos\" [value]=\"buscaProd.IdProd\">{{buscaProd.IdProd}} | {{buscaProd.NomeProd}}</option>\n                    </select>\n                  </div>\n                <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarProduto(NomeProd, IdCat);\">Alterar Produto</a>\n              </form>\n            </div>\n          </div>\n        </div>\n        <!--Categorias !-->\n        <div class=\"container\" *ngSwitchCase=\"'cadastroCat'\">\n            <div class=\"card card-register mx-auto mt-5\">\n              <div class=\"card-header text-center\">Cadastra Categoria</div>\n              <div class=\"card-body\">\n                <form>\n                  <div class=\"form-group\">\n                    <div class=\"form-row\">\n                      <div class=\"col-md-12\">\n                        <label for=\"NomeProd\">Categoria</label>\n                        <input class=\"form-control\" id=\"NomeCat\" name=\"NomeCat\" type=\"text\" placeholder=\"Digite o nome da categoria\"[(ngModel)]=\"NomeCat\" required>\n                      </div>\n                    </div>\n                  </div>\n                  <a class=\"btn btn-primary btn-block\" (click)=\"cadastrarCategoria(NomeCat);\">Cadastrar Categoria</a>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"container\" *ngSwitchCase=\"'delCat'\">\n              <div class=\"card card-register mx-auto mt-5\">\n                <div class=\"card-header text-center\">Deleta Categoria</div>\n                <div class=\"card-body\">\n                  <form>\n                    <div class=\"form-group\">\n                      <div class=\"form-row\">\n                        <div class=\"col-md-12\">\n                          <label for=\"NomeProd\">Categoria</label>\n                            <div class=\"form-group\">\n                              <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\n                                  <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\n                              </select>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                    <a class=\"btn btn-primary btn-block\" (click)=\"apagarCat(IdCat);\">Deletar Categoria</a>\n                  </form>\n                </div>\n              </div>\n            </div>\n            <!--NAO FUNFA!-->\n            <div class=\"container\" *ngSwitchCase=\"'altCat'\">\n                <div class=\"card card-register mx-auto mt-5\">\n                  <div class=\"card-header text-center\">Alterar Categoria</div>\n                  <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <div class=\"form-row\">\n                              <div class=\"col-md-12\">\n                                <label for=\"NomeProd\">Categoria</label>\n                                <input class=\"form-control\" id=\"NomeCat\" name=\"NomeCat\" type=\"text\" placeholder=\"Digite o nome da categoria\"[(ngModel)]=\"NomeCat\" required>\n                              </div>\n                            </div>\n                          </div>\n                      <div class=\"form-group\">\n                        <div class=\"form-row\">\n                          <div class=\"col-md-12\">\n                            <label for=\"NomeProd\">Antiga Categoria</label>\n                              <div class=\"form-group\">\n                                <select [(ngModel)]=\"IdCat\" class=\"custom-select\"  name=\"categorias\">\n                                    <option *ngFor=\"let busca of categorias\" [value]=\"busca.IdCat\">{{busca.IdCat}} | {{busca.NomeCat}}</option>\n                                </select>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n                      <a class=\"btn btn-primary btn-block\" (click)=\"alterarCat(IdCat, NomeCat);\">Alterar Categoria</a>\n                    </form>\n                  </div>\n                </div>\n              </div>\n<!--Relatorios!-->\n<div class=\"container\" *ngSwitchCase=\"'reportCat'\">\n    <div class=\"card card-register mx-auto mt-5\">\n      <div class=\"card-header text-center\">Relatorio</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"table-responsive\">\n              <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>Codigo Categoria</th>\n                    <th>Categoria</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let busca of categorias\">\n                    <td> {{busca.IdCat}} </td>\n                    <td>{{busca.NomeCat}}</td>\n                  </tr>\n                </tbody>\n                </table>\n                </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\" *ngSwitchCase=\"'reportProd'\">\n      <div class=\"card card-register mx-auto mt-5\">\n        <div class=\"card-header text-center\">Relatorio</div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                  <thead>\n                    <tr>\n                      <th>Codigo Produto</th>\n                      <th>Produto</th>\n                      <th>Categoria</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let busca of produtos\">\n                      <td> {{busca.IdProd}} </td>\n                      <td>{{busca.NomeProd}}</td>\n                      <td>{{busca.IdCat}}</td>\n                    </tr>\n                  </tbody>\n                  </table>\n                  </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n    <section class=\"two-way-binding\">\n          <div class=\"col-lg-12 menu-fixed\" *ngSwitchCase=\"'home'\">\n              <div class=\"card text-center\">\n                <div class=\"card-header\">\n                  <i class=\"fa fa-bar-chart\"></i> CRUD</div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Igor Alexandre Saraiva Silva</h5>\n                    <p class=\"card-text\">This is the implementation of a simple CRUD. I'm using ASP.NET + Angular 5 with bootstrap and Entity Framework </p>\n                </div>\n                <div class=\"card-footer small text-muted\">\n                  <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin</a>\n                </div>\n              </div>\n            </div>\n    </section>\n    </form>\n\n    <!-- Bootstrap core JavaScript-->\n    <script src=\"vendor/jquery/jquery.min.js\"></script>\n    <script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n    <!-- Core plugin JavaScript-->\n    <script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__ = __webpack_require__("./src/app/services/cadastro.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

var WebApiComponent = /** @class */ (function () {
    function WebApiComponent(service) {
        this.service = service;
        // tslint:disable-next-line:no-inferrable-types
        this.aba = 'home';
        this.buscarCategoria();
        this.buscarProdutos();
    }
    WebApiComponent.prototype.cadastrarCategoria = function () {
        this.service.cadastraCategoria(this.NomeCat).subscribe(function (retorno) { return alert(retorno); });
    };
    WebApiComponent.prototype.cadastrarProduto = function () {
        this.service.cadastraProduto(this.NomeProd, this.IdCat).subscribe(function (retorno) { return alert(retorno); });
    };
    WebApiComponent.prototype.alterarCat = function () {
        this.service.alteraCat(this.IdCat, this.NomeCat).subscribe(function (retorno) { return alert(retorno); });
    };
    WebApiComponent.prototype.buscarCategoria = function () {
        var _this = this;
        this.service.buscaCategoria(this.IdCat, this.NomeCat).subscribe(function (retorno) { return _this.categorias = retorno; });
    };
    WebApiComponent.prototype.buscarProdutos = function () {
        var _this = this;
        this.service.buscaProduto(this.IdProd, this.NomeProd, this.IdCat, this.NomeCat).subscribe(function (retorno) { return _this.produtos = retorno; });
    };
    WebApiComponent.prototype.apagarCat = function () {
        var _this = this;
        this.service.apagaCat(this.IdCat).subscribe(function (retorno) { return _this.categorias = retorno; });
    };
    WebApiComponent.prototype.ngOnInit = function () {
    };
    WebApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-web-api',
            template: __webpack_require__("./src/app/web-api/web-api.component.html"),
            styles: [__webpack_require__("./src/app/web-api/web-api.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_cadastro_service__["a" /* CadastroService */]])
    ], WebApiComponent);
    return WebApiComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map