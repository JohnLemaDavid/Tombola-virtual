import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TombolaService {
  titulo: string = '';
  cantidadGanadores: number = 0;
  cantidadSuplentes: number = 0;

  constructor() { }
}

