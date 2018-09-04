import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CommModule} from './common-module/comm.module';
import {BusinessModule} from "./business-module/business.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    BusinessModule,
    CommonModule,
    CommModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
