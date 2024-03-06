import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  titulo: string = '';
  cantidadGanadores: number = 0;
  cantidadSuplentes: number = 0;
  pageLoad: boolean =false;
  constructor() { }
}

