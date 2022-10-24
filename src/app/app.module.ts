import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaisModule } from '@modules/pais/pais.module';
import { SharedModule } from '@modules/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
