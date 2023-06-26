import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContantComponent } from './contant/contant.component';
import { NumberComponent } from './number/number.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
@NgModule({
  declarations: [
    AppComponent,
    ContantComponent,
    NumberComponent,
    FormarrayComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
