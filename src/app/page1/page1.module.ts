import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';

@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    BrowserModule,
    Page1RoutingModule
  ],
  providers: [],
  bootstrap: [Page1Component]
})
export class Page1Module { 

}
