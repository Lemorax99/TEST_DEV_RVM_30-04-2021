'use strict'
import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ListaComponent} from './components/lista/lista.component';
import {RegistrarComponent} from './components/registrar/registrar.component';
import {ActualizarComponent} from './components/actualizar/actualizar.component';
import {HomeComponent} from './components/home/home.component';


const appRoutes: Routes =[
	{path:'lista',component: ListaComponent},
	{path:'registrar',component: RegistrarComponent},
	{path:'editar/:id', component: ActualizarComponent},
	{path:'home',component: HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
