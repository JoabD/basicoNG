import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Batman';
  edad: number = 45;

  getnombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 25;
  }

}
