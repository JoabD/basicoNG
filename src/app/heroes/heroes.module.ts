import { NgModule } from "@angular/core";

import {HeroeComponent} from "./heroe/heroe.component";
import {ListadoComponent} from "./listado/listado.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ], //Esto dice que contiene este modulo
  exports: [
    //Esto se hace visible fuera del modulo
    ListadoComponent
  ],
  imports: [
    //Solo se deben colocar modulos
    CommonModule
  ]
})
export class HeroesModule {}
