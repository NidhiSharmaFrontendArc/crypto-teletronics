import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoComponent } from './crypto/crypto.component';
import { DataComponent } from './data/data.component';
import {MycurrencyPipe} from './custom.currencypipe';

@NgModule({
  declarations: [
    AppComponent,
    CryptoComponent,
    DataComponent,
    MycurrencyPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
