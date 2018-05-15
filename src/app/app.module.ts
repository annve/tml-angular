import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Vb00Component } from './voorbeelden/vb00/vb00.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent } from './voorbeelden/vbswitch/vbswitch.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { ExponentialStrengthPipe } from './voorbeelden/vbpipes02/exponential-strength.pipe';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
import { VbAnimationComponent } from './voorbeelden/vbanimation/vb-animation/vb-animation.component';
import { VbFormValidationComponent } from './voorbeelden/vbformvalidation/form-validation.component';
import { OefHogerLagerComponent } from './oefeningen/oefhogerlager/oefhogerlager.component';
import { VbHttpComponent } from './voorbeelden/vbhttp/vbhttp.component';
import { OefhttpComponent } from './oefeningen/oefhttp/oefhttp.component';

@NgModule({
  declarations: [
    AppComponent,
    Vb00Component,
    VbDatabindingComponent,
    Oef00Component,
    VbIfComponent,
    VbForComponent,
    VbForuitbrComponent,
    VbSwitchComponent,
    VbPipesComponent,
    ExponentialStrengthPipe,
    OefBroodjesComponent,
    VbAnimationComponent,
    VbFormValidationComponent,
    OefHogerLagerComponent,
    VbHttpComponent,
    OefhttpComponent
  ],
  imports: [
    BrowserModule,FormsModule, BrowserAnimationsModule, HttpClientModule
  ],

  providers: [],
  bootstrap: [OefhttpComponent]
})
export class AppModule { }
