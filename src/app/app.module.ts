import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ routing, appRoutingProviders} from './app.routing';

import { ListaComponent } from './components/lista/lista.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { HomeComponent } from './components/home/home.component';
import { PaginacionPipe } from './pipes/paginacion.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Importar el hash location
import {HashLocationStrategy,LocationStrategy} from '@angular/common';*/

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    RegistrarComponent,
    ActualizarComponent,
    HomeComponent,
    PaginacionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
  	FormsModule,
  	BrowserAnimationsModule
  ],
  providers: [
  appRoutingProviders
  /*{provide: LocationStrategy, useClass: HashLocationStrategy}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
