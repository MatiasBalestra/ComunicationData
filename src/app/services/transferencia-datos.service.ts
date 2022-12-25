import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaDatosService {

  @Output() disparadorDeDatos:EventEmitter<any> = new EventEmitter();
  constructor() { }
}
