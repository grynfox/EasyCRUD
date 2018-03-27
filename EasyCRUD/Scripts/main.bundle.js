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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isCollapsed = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var web_api_component_1 = __webpack_require__("./src/app/web-api/web-api.component.ts");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                web_api_component_1.WebApiComponent
            ],
            imports: [
                ngx_bootstrap_1.CollapseModule.forRoot(), ngx_bootstrap_1.BsDropdownModule.forRoot(),
                // NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                http_2.HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN'
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/web-api/web-api.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/web-api/web-api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-dark navbar-expand-lg bg-dark\">\n    <form class=\"form-inline\">\n      <button type=\"button\" class=\"btn btn-outline-success\"\n  (click)=\"aba= 'home'\">Easy </button>\n  <button class=\"btn btn-sm btn-outline-secondary \" (click)=\"aba= 'cadastroProd'\"\n   type=\"button\">Product Registration</button>\n    <button class=\"btn btn-sm btn-outline-secondary \"(click)=\"aba= 'cadastroCat'\"\n     type=\"button\">Category Registration</button>\n    <button class=\"btn btn-sm btn-outline-secondary \"(click)=\"aba= 'relatorio'\" type=\"button\">\n     Reports</button>\n    </form>\n  </div>\n\n<div class=\"container\" [ngSwitch]=\"aba\">\n  <p *ngSwitchCase=\"'relatorio'\">relatorio</p>\n</div>\n<!--cadastro de produtos!-->\n<form [ngSwitch]=\"aba\" >\n  <!--Cadastro de Produtos-->\n    <div class=\"form-row\" *ngSwitchCase=\"'cadastroProd'\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer01\">Produto</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"CadastraProduto\" required>\n          <div class=\"valid-feedback\">\n            Digite o nome do produto a ser cadastrado.\n          </div>\n          <div class=\"form-group\">\n              <select class=\"custom-select\" required>\n                <option value=\"\">Categoria</option>\n                <option value=\"1\">One</option>\n                <option value=\"2\">Two</option>\n                <option value=\"3\">Three</option>\n              </select>\n            </div>\n            <div>\n              <button class=\"btn btn-success\" type=\"submit\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Cadastra um Produto no banco de dados\">Cadastrar</button>\n            </div>\n        </div>\n      </div>\n      <!--Cadastro de Categorias-->\n    <div class=\"form-row\" *ngSwitchCase=\"'cadastroCat'\">\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"validationServer01\">Categoria</label>\n        <input type=\"text\" class=\"form-control is-valid\" id=\"CadastraCat\" required>\n        <div class=\"valid-feedback\">\n          Digite a Categoria a ser cadastrada.\n        </div>\n          <div>\n            <button class=\"btn btn-success\" type=\"submit\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Cadastra um Produto no banco de dados\">Cadastrar</button>\n          </div>\n      </div>\n    </div>\n\n    <!--Mostra minha apresentação!-->\n    <div class=\"card text-center\"  *ngSwitchCase=\"'home'\">\n      <!--img class=\"card-img-top\" src=\"\\assets\\igor.jpg\" alt=\"Card image cap\"!-->\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Igor Alexandre Saraiva Silva</h5>\n        <p class=\"card-text\">This is the realization of a simple CRUD. I'm using ASP.NET + Angular 5 with bootstrap and Entity Framework </p>\n        <a href=\"https://www.linkedin.com/in/igoralexandre/\" class=\"btn-outline-info\">Linkedin</a>\n      </div>\n    </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/web-api/web-api.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var WebApiComponent = /** @class */ (function () {
    function WebApiComponent(http) {
        this.http = http;
        // tslint:disable-next-line:no-inferrable-types
        this.aba = 'home';
    }
    WebApiComponent.prototype.ngOnInit = function () {
    };
    WebApiComponent = __decorate([
        core_1.Component({
            selector: 'app-web-api',
            template: __webpack_require__("./src/app/web-api/web-api.component.html"),
            styles: [__webpack_require__("./src/app/web-api/web-api.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], WebApiComponent);
    return WebApiComponent;
}());
exports.WebApiComponent = WebApiComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map