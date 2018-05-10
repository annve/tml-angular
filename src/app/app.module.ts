import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Vb00Component } from './voorbeelden/vb00/vb00.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent } from './voorbeelden/vbswitch/vbswitch.component';
import { VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { VbFormValidationComponent } from './voorbeelden/vbformvalidation/form-validation.component';
import { VbHttpComponent } from './voorbeelden/vbhttp/vbhttp.component';
import { VbServiceComponent03 } from './voorbeelden/vbservice/vbservice03.component';
import { VbScholenService03 } from './voorbeelden/vbservice/vbservice03';

@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    VbDatabindingComponent,
    VbIfComponent,
    VbForComponent,
    VbSwitchComponent,
    VbPipesComponent,
    VbFormValidationComponent,
    VbHttpComponent,
    VbServiceComponent03
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],

  providers: [VbScholenService03],
  bootstrap: [AppComponent]
})
export class AppModule { }
