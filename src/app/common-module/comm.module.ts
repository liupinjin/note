import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import {NavComponent} from './component/nav/nav.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { FooterComponent } from './component/footer/footer.component';
import {SysConfig} from './modal/sys-config';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    NavComponent,
    LoginComponent,
    FooterComponent
  ],
  providers: [SysConfig],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class CommModule { }
