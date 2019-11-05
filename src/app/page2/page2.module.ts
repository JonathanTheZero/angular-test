import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    BrowserModule,
    Page2RoutingModule,
  ],
  providers: [],
  bootstrap: [Page2Component]
})
export class Page2Module { 

}
