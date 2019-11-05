import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page1Module } from "./page1/page1.module";
import { Page2Component } from './page2/page2.component';
import { Page2Module } from "./page2/page2.module";

const appRoutes: Routes = [
  {
    path: 'page2',
    component: Page2Component 
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'index',
    component: AppComponent
  },
  { 
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      ),
      BrowserModule, 
      HttpClientModule,
      AppRoutingModule,
    ],
    declarations: [
      AppComponent,
      Page1Component,
      Page2Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule{ 

}
