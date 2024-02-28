import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tombola',
  templateUrl: './list-tombola.component.html',
})
export class ListTombolaComponent {
  constructor(private router: Router){}

  title: string = '';
  ganadores: number = 1;
  suplentes: number = 0;
  participants: string = '';
  errorMessage: string = '';

  guardarDatos() {
    if (this.title && this.ganadores && this.suplentes && this.participants) {
      // Todos los campos están llenos, guardar en localStorage
      localStorage.setItem('title', this.title);
      localStorage.setItem('ganadores', this.ganadores.toString());
      localStorage.setItem('suplentes', this.suplentes.toString());
      localStorage.setItem('participants', this.participants);
      this.errorMessage = '';

      this.router.navigate(['games/rifa']);

    } else {
      this.errorMessage = 'Por favor, complete todos los campos antes de continuar.';
    }
  }

}
