import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Vb00Component } from './voorbeelden/vb00/vb00.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent } from './voorbeelden/vbswitch/vbswitch.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';

@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    VbDatabindingComponent,
    Oef00Component,
    VbIfComponent,
    VbForComponent,
    VbForuitbrComponent,
    VbSwitchComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],

  providers: [],
  bootstrap: [VbForuitbrComponent]
})
export class AppModule { }
