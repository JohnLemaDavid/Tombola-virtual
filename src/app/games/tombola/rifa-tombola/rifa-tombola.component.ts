import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TombolaService } from '../../tombola.service';



@Component({
  selector: 'app-rifa-tombola',
  templateUrl: './rifa-tombola.component.html',

})
export class RifaTombolaComponent implements OnInit {
  participants: string = '';
  suplenteSelect:number=0;
  winnerSelect:number=0;
  selectorWinner: string = '';
  buttonDisabled: boolean = false; // Variable para habilitar/deshabilitar el botón

  constructor(
    private router: Router,
    private tombolaService: TombolaService
  ) {}

  ngOnInit(): void {
    const title = this.tombolaService.getItem('title');
    const ganadores = this.tombolaService.getItem('ganadores');
    const suplentes = this.tombolaService.getItem('suplentes');
    const participants = this.tombolaService.getItem('participants');

    if (!title || !ganadores || suplentes<0 || !participants) {
      this.router.navigate(['games/config']);
    }
  }
  generateRandomName(): void {
    const todos = this.tombolaService.getItem('participants');
    const suplentes = parseInt(this.tombolaService.getItem('suplentes'), 10);
    const ganadores = parseInt(this.tombolaService.getItem('ganadores'), 10);

    if (!todos) {
      console.log('La lista de participantes está vacía.');
      return;
    }

    const participantsArray = todos.split('\n');

    if (this.suplenteSelect === 0) {
      // Solo se seleccionan ganadores si no hay suplentes disponibles
      if (this.winnerSelect < ganadores) {
        const randomIndex = Math.floor(Math.random() * participantsArray.length);
        this.winnerSelect++;
        this.selectorWinner = "GANADOR #" + this.winnerSelect + participantsArray[randomIndex];
      } else {
        this.selectorWinner = 'FIN DE SORTEO';
      }
    } else {
      // Se seleccionan ganadores y suplentes mientras haya disponibles
      if (this.winnerSelect < ganadores) {
        const randomIndex = Math.floor(Math.random() * participantsArray.length);
        this.winnerSelect++;
        this.selectorWinner = "GANADOR #" + this.winnerSelect + participantsArray[randomIndex];
      } else if (this.suplenteSelect < suplentes) {
        const randomIndex = Math.floor(Math.random() * participantsArray.length);
        this.suplenteSelect++;
        this.selectorWinner = "ANULADO #" + this.suplenteSelect + participantsArray[randomIndex];
      } else {
        this.selectorWinner = 'FIN DE SORTEO';
      }
    }
  }
}
