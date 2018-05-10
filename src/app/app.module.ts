import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Vb00Component } from './voorbeelden/vb00/vb00.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';

@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    VbDatabindingComponent,
    VbIfComponent,
    VbForComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
