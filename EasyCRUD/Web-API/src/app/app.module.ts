import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Renderer2 } from '@angular/core';
import { AppComponent } from './app.component';
import { WebApiComponent } from './web-api/web-api.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WebApiComponent
  ],
  imports: [
     CollapseModule.forRoot(), BsDropdownModule.forRoot(),
    // NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
