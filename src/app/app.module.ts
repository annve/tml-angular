import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { VbScholenService03 } from './voorbeelden/vbservice/vbservice03';
import { VbServiceComponent03 } from './voorbeelden/vbservice/vbservice03.component';
import { CurrencyService } from './oefeningen/oefcurrencyconvertor/currency.service';
import { OefCurrencyconvertorComponent } from './oefeningen/oefcurrencyconvertor/oefcurrencyconvertor.component';
import { HeroesAllComponent } from './oefeningen/oefheroes/heroes-all/heroes-all.component';
import { HeroesService } from './oefeningen/oefheroes/heroes.service';
import { HeroDetailComponent } from './oefeningen/oefheroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './oefeningen/oefheroes/heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { Vbrouting0Component } from './voorbeelden/vbrouting/vbrouting0.component';
import { VbRoutingModule } from './voorbeelden/vbrouting/vbrouting.module';
import { PageNotFoundComponent } from './voorbeelden/vbrouting/page-not-found.component';
import { VbroutingComponent } from './voorbeelden/vbrouting/vbrouting.component';
import { VbDirectiveComponent } from './voorbeelden/vbdirective/vbdirective.component';
import { HighlightDirective } from './voorbeelden/vbdirective/vbdirective.directive';

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
    OefhttpComponent,
    OefCurrencyconvertorComponent,
    HeroesAllComponent,
    HeroDetailComponent,
    HeroesComponent,
    Vbrouting0Component,
    PageNotFoundComponent,
    VbroutingComponent,
    VbDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule,
    VbRoutingModule
  ],

  providers: [HeroesService],
  bootstrap: [VbDirectiveComponent]
})
export class AppModule { }
