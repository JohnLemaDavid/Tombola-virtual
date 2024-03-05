import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TombolaService } from '../../tombola.service';

@Component({
  selector: 'app-list-tombola',
  templateUrl: './list-tombola.component.html',
})
export class ListTombolaComponent {
  constructor(
    private router: Router,
    private tombolaService: TombolaService

    ){}

  title: string = '';
  ganadores: number = 1;
  suplentes: number = 0;
  errorMessage: string = '';

  guardarDatos() {
    if (this.title && this.ganadores && this.suplentes >= 0) {
      this.tombolaService.titulo = this.title;
      this.tombolaService.cantidadGanadores = this.ganadores;
      this.tombolaService.cantidadSuplentes = this.suplentes;
      this.errorMessage = '';
      this.router.navigateByUrl('games/rifa')
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}
