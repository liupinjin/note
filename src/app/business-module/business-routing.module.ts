import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicComponent} from "./music/music.component";
import {IndexComponent} from "./index.component";

@NgModule({
  imports: [ //导入 BrowserModule 以获取浏览器特有的服务，比如 DOM 渲染、无害化处理和位置（location）。
    RouterModule.forChild([
      { path: '', redirectTo: "index" , pathMatch: 'prefix' },
      { path: 'index', component: IndexComponent },
      { path: 'music', component: MusicComponent }
    ])
  ],
  exports: [
    RouterModule
  ]

// declarations —— 该应用所拥有的组件。
// imports —— 导入 BrowserModule 以获取浏览器特有的服务，比如 DOM 渲染、无害化处理和位置（location）。
// providers —— 各种服务提供商。
// bootstrap —— 根组件，Angular 创建它并插入 index.html 宿主页面。
})
export class BusinessRoutingModule { }
