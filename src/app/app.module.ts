import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAlphaComponent } from './components/componente-alpha/componente-alpha.component';
import { ComponenteBetaComponent } from './components/componente-beta/componente-beta.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAlphaComponent,
    ComponenteBetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
