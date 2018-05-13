import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Vb00Component } from './voorbeelden/vb00/vb00.component';

@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
  ],
  imports: [
    BrowserModule, 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
