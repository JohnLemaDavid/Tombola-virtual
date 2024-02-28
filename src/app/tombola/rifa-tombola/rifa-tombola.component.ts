import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TombolaService } from '../tombola.service';

@Component({
  selector: 'app-rifa-tombola',
  templateUrl: './rifa-tombola.component.html',
  styleUrls: ['./rifa-tombola.component.scss']
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

    if (!title || !ganadores || !suplentes || !participants) {
      this.router.navigate(['tombola']);
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
    if (this.winnerSelect< ganadores) {
      if (this.suplenteSelect < suplentes) {
        const randomIndex = Math.floor(Math.random() * participantsArray.length);
        this.suplenteSelect++;
        this.selectorWinner= "ANULADO #" + this.suplenteSelect + participantsArray[randomIndex];
      } else {
        const randomIndex = Math.floor(Math.random() * participantsArray.length);
        this.winnerSelect++;
        this.selectorWinner= "GANADOR #"+ this.winnerSelect + participantsArray[randomIndex];
        this.suplenteSelect=0;
      }
    }else{
      this.selectorWinner='FIN DE SORTEO'
      this.suplenteSelect=suplentes;
      this.winnerSelect=ganadores;
    }




  }
}
