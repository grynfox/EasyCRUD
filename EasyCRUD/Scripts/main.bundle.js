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
    CadastroService.prototype.cadastraProduto = function (descProdParam, idCatParam) {
        var result = this.postaction(this._cadastraProduto, { DescProd: descProdParam, IdCat: idCatParam }).map(
        // tslint:disable-next-line:no-shadowed-variable
        function (result) {
            var produto = result;
            return produto;
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

module.exports = ""

/***/ }),

/***/ "./src/app/web-api/web-api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-dark navbar-expand-lg bg-dark\">\n    <form class=\"form-inline\">\n      <button type=\"button\" class=\"btn btn-outline-success\"\n  (click)=\"aba= 'home'\">Easy </button>\n  <button class=\"btn btn-sm btn-outline-secondary \" (click)=\"aba= 'cadastroProd'\"\n   type=\"button\">Product Registration</button>\n    <button class=\"btn btn-sm btn-outline-secondary \"(click)=\"aba= 'cadastroCat'\"\n     type=\"button\">Category Registration</button>\n    <button class=\"btn btn-sm btn-outline-secondary \"(click)=\"aba= 'relatorio'\" type=\"button\">\n     Reports</button>\n    </form>\n  </div>\n\n<div class=\"container\" [ngSwitch]=\"aba\">\n  <p *ngSwitchCase=\"'relatorio'\">relatorio</p>\n</div>\n<!--cadastro de produtos!-->\n<form [ngSwitch]=\"aba\" >\n  <section class=\"two-way-binding\">\n  <!--Cadastro de Produtos-->\n    <div class=\"form-row\" *ngSwitchCase=\"'cadastroProd'\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer01\">Produto</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"DescProd\" name=\"DescProd\" [(ngModel)]=\"DescProd\" required>\n          <div class=\"valid-feedback\">\n            Digite o nome do produto a ser cadastrado.\n          </div>\n          <div class=\"form-group\">\n              <select ng-options=\"option.value as option.title\" class=\"custom-select\" required>\n              </select>\n            </div>\n            <div>\n              <button class=\"btn btn-success\" type=\"submit\" (click)=\"cadastrarProduto(DescProd, IdCat);\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Cadastra um Produto no banco de dados\">Cadastrar Produto</button>\n            </div>\n        </div>\n      </div>\n      <!--Cadastro de Categorias-->\n    <div class=\"form-row\" *ngSwitchCase=\"'cadastroCat'\">\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"validationServer01\">Categoria</label>\n        <input class=\"form-control is-valid\" type=\"text\" id=\"NomeCat\" name=\"NomeCat\" [(ngModel)]=\"NomeCat\" required>\n        <div class=\"valid-feedback\">\n          Digite a Categoria a ser cadastrada.\n        </div>\n          <div>\n            <button class=\"btn btn-success\" type=\"submit\" (click)=\"cadastrarCategoria(NomeCat);\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Cadastra uma Categoria no banco de dados\">Cadastrar Categoria</button>\n          </div>\n      </div>\n    </div>\n\n    <!--Mostra minha apresentação!-->\n    <div class=\"card text-center\"  *ngSwitchCase=\"'home'\">\n      <!--img class=\"card-img-top\" src=\"\\assets\\igor.jpg\" alt=\"Card image cap\"!-->\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Igor Alexandre Saraiva Silva</h5>\n        <p class=\"card-text\">This is the realization of a simple CRUD. I'm using ASP.NET + Angular 5 with bootstrap and Entity Framework </p>\n        <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin</a>\n      </div>\n    </div>\n  </section>\n  </form>\n\n"

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
    }
    WebApiComponent.prototype.cadastrarCategoria = function () {
        this.service.cadastraCategoria(this.NomeCat).subscribe(function (retorno) { return alert(retorno); });
    };
    WebApiComponent.prototype.cadastrarProduto = function () {
        this.service.cadastraProduto(this.DescProd, this.IdCat);
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