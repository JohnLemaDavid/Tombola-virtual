import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-list-tombola',
  templateUrl: './list-tombola.component.html',
})
export class ListTombolaComponent implements OnInit {

  constructor(
    private router: Router,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    localStorage.clear();
  }

  title: string = '';
  ganadores: number = 1;
  suplentes: number = 0;
  errorMessage: string = '';

  guardarDatos() {
    if (this.title && this.ganadores && this.suplentes >= 0) {
      this.gamesService.titulo = this.title;
      this.gamesService.cantidadGanadores = this.ganadores;
      this.gamesService.cantidadSuplentes = this.suplentes;
      this.errorMessage = '';
      this.router.navigateByUrl('games/rifa')
    } else {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
    }
  }
}
