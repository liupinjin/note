import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusicComponent} from "./music/music.component";
import {BusinessRoutingModule} from "./business-routing.module";
import {IndexComponent} from "./index.component";
import {CommModule} from '../common-module/comm.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
// declarations —— 该应用所拥有的组件。
// imports —— 导入 BrowserModule 以获取浏览器特有的服务，比如 DOM 渲染、无害化处理和位置（location）。
// providers —— 各种服务提供商。
// bootstrap —— 根组件，Angular 创建它并插入 index.html 宿主页面。
@NgModule({
  imports: [
    CommonModule,
    CommModule,
    NgZorroAntdModule.forRoot(),
    BusinessRoutingModule,

  ],
  declarations: [MusicComponent, IndexComponent ],
  providers: []

})
export class BusinessModule { }
