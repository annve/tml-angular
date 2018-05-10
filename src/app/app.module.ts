import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Vb00Component } from './voorbeelden/vb00/vb00.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbForComponent } from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent } from './voorbeelden/vbswitch/vbswitch.component';
import { VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { VbFormValidationComponent } from './voorbeelden/vbformvalidation/form-validation.component';
import { VbHttpComponent } from './voorbeelden/vbhttp/vbhttp.component';
import { VbServiceComponent01 } from './voorbeelden/vbservice/vbservice01.component';
import { VbScholenService01 } from './voorbeelden/vbservice/vbservice01';
import { PageNotFoundComponent } from './voorbeelden/vbrouting/page-not-found.component';
import { Vbrouting0Component } from './voorbeelden/vbrouting/vbrouting0.component';
import { VbroutingReqparamComponent } from './voorbeelden/vbrouting/vbrouting-reqparam.component';


// zie vbrouting.module.ts
const appRoutes: Routes = [
  {
    path: 'heroes',   // path begint niet met slash!
    component: Vb00Component
  },
  {
    path: 'vb01',
    component: VbDatabindingComponent
  },
  {
    path: 'vb02',
    component: VbIfComponent
  },
  {
    path: 'routing/:id',
    component: VbroutingReqparamComponent
  },
  {
    path: '',   // start path
    redirectTo: '/heroes',  // REDIRECT
    //  A redirect route requires a pathMatch property to tell the router 
    //   how to match a URL to the path of a route. The router throws an error 
    //   if you don't. 
    pathMatch: 'full'  // whole URL must match
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

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
    VbServiceComponent01,
    PageNotFoundComponent,
    Vbrouting0Component,
    VbroutingReqparamComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],

  providers: [VbScholenService01],
  bootstrap: [AppComponent]
})
export class AppModule { }
