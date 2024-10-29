import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { InicioModule } from '../inicio/inicio.module';


@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProductoRoutingModule,
    InicioModule
  ]
})
export class ProductoModule { }
