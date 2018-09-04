import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '',redirectTo:"business",pathMatch: 'prefix' },
  { path: 'business', loadChildren: 'app/business-module/business.module#BusinessModule' } //懒加载business
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
